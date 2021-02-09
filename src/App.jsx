import React from 'react';
import './css/main.css';

// Material UI Icons & Spinner
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewListIcon from '@material-ui/icons/ViewList';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';
import HashLoader from "react-spinners/HashLoader";
import { Tooltip } from '@material-ui/core';


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      animeUpdate: '',
      animeList: [],
      animeURL: [],
      animeIMG: [],
      animeSYN: [],
      animeTYP: [],
      animeEPS: [],
      viewListMode: true,
      loadingAniFlex: true,
      loadingIMGMode: true
    }
  }

  async componentDidMount() {
    await this.GetAnimeList()
    this.setState({ loadingAniFlex: false })
    await this.GetAnimeIMG()
    this.setState({ loadingIMGMode: false })
  }

  // Retrieve Anime Title (Local API)
  GetAnimeList = async () => {
    // const list = "http://localhost:3000/data/list.json"
    const list = "https://s20016.github.io/AniFlex/data/list.json"
    await fetch(list)
      .then(res => res.json())
      .then(json => this.setState({ data: json}))

    const data = this.state.data
    this.setState({
      animeUpdate: data.update,
      animeList: data.anime
    })
  }

  // Retrieve Anime Image (Jikan API)
  GetAnimeIMG = async () => {
    let data = []
    let aniURL = []
    let aniIMG = []
    let aniSYN = []
    
    for (const anititle of this.state.animeList) {
      const title1 = anititle[0].split(" ").join("%20")
      const url = `https://api.jikan.moe/v3/search/anime?q=${title1}&limit=1`
      aniURL.push(url)
    }

    for (const url of aniURL) {
      await fetch(url)
        .then(res => res.json())
        .then(json => data.push(json.results[0]))
    }

    for (const item in data) {
      aniIMG.push(data[item].image_url)
      aniSYN.push(data[item].synopsis)
    }

    this.setState({
        animeURL: aniURL,
        animeIMG: aniIMG,
        animeSYN: aniSYN
    })
  }

  // Anime Title and Description
  AnimeHeader = () => {
    const aniUpdate = this.state.animeUpdate

    return (
      <>
        <header id="title">
          <div className="mainHeader">Anime List</div>
        </header>

        <section className="subHeader">
          <div className="update">
            <p>Updated: {aniUpdate}</p>
          </div>
          <div className="legend">
            <ul>
              <li className="legendM">Movie</li>
              <li className="legendR">Watch Count</li>
            </ul>
          </div>
        </section>
      </>
    )
  }

  // Anime Display Item
  AnimeDisplay = () => {
    return (
      <div className="display">
        <button className="displayList" onClick={() => {
            this.setState({ viewListMode: true }) }}>
          <ViewHeadlineIcon/>
        </button>
        { this.state.loadingIMGMode
          ? <Tooltip disableFocusListener 
              title="Image View is not yet available" placement="top">
              <div className="displayLoad"><HighlightOffIcon/></div>
            </Tooltip>
          : <button className="displayImg" onClick={() => {
              this.setState({ viewListMode: false }) }}>
              <ViewListIcon/>
            </button> } 
      </div>
    )
  }

  // Anime (List Mode)
  AnimeListMode = () => {
    let int = 0
    let listFinal = []

    for (const anititle of this.state.animeList) {
      const title1 = anititle[0]
      const title2 = anititle[1]
      const titleL = anititle[2].slice(0, 1)
      const titleR = anititle[2].slice(1, 2)
      listFinal.push(
        <li key={int} className={titleL}>
          {title1}{title2}
          { (titleR > 1)
            ? <span className="R">{titleR}</span>
            : <span className="R"></span>
          }
        </li>
      ); int += 1
    }

    return <div className="aniList">{listFinal}</div>
  }

  // Anime (Image Mode)
  AnimeIMGMode = () => {
    let i = 0
    let imgFinal = []

    for (const anititle of this.state.animeList) {
      const title1 = anititle[0]
      const title2 = anititle[1]
      const titleL = anititle[2].slice(0, 1)
      const titleR = anititle[2].slice(1, 2)
      const aniImg = this.state.animeIMG
      const aniSyn = this.state.animeSYN

      imgFinal.push(
        <div className="aniImgBanner" key={i}>
          <div className="cardImgCon">
            <img className="cardImg" src={aniImg[i]} alt={i}/>
          </div>
          <div className="cardTitleCon">
            <h1 className={`cardTitle ${titleL}`}>
              {title1}{title2}
            </h1>
            <div className="cardType">
              { (titleL === "M")
                ? <span className="M">Movie</span>
                : <span className="T">TV</span>
              }
              { (titleR >= "2")
                ? <span className="R">{titleR}</span>
                : <span className="R"></span>
              }
            </div>
            <div className="cardSynopsis">{aniSyn[i]}</div>
          </div>
        </div>
      ); i += 1
    }

    return <div className="aniIMG">{imgFinal}</div>
  }

  // Footer
  AnimeFooter = () => {
    const count = this.state.animeList.length
    return (
      <div className="footer">
        <div className="total">
          <p className="count">{count} Anime</p>
        </div>
        <div className="btt">
          <a href="#title" className="gotopbtn">
            <KeyboardArrowUpOutlinedIcon className="btn" />
          </a>
        </div>
      </div>
    )
  }

  // Main
  render() {
    return (
      this.state.loadingAniFlex
        ? <div className="load">
            <HashLoader color={"#70D7FF"} size={50}/>
            <p>AniFlex</p>
          </div>
        : <>
            <this.AnimeHeader/>
            <this.AnimeDisplay/>
            { this.state.viewListMode 
              ? <this.AnimeListMode/> 
              : <this.AnimeIMGMode />
            }
            <this.AnimeFooter/>
          </>
    )
  }
}
