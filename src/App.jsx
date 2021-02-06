import React from 'react'
import './css/main.css'

// Material UI Icons & Spinner
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewListIcon from '@material-ui/icons/ViewList';
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';
import HashLoader from "react-spinners/HashLoader";


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      animeTitle: '',
      animeUpdate: '',
      animeLegend: '',
      animeList: [],
      animeURL: [],
      animeIMG: [],
      animeSYN: [],
      animeTYP: [],
      animeEPS: [],
      viewListMode: true,
      loadingAniFlex: true,
      color: "#FF2D55"
    }
  }

  async componentDidMount() {
    await this.GetAnimeList()
    await this.GetAnimeIMG()
    this.setState({ loadingAniFlex: false })
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
      animeTitle: data.title,
      animeUpdate: data.update,
      animeLegend: data.legend,
      animeList: data.anime,
    })
  }

  // Retrieve Anime Image (Jikan API)
  GetAnimeIMG = async () => {
    let data = []
    let aniURL = []
    let aniIMG = []
    let aniSYN = []
    // let aniTYP = []
    // let aniEPS = []
    
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
      // aniTYP.push(data[item].type)
      // aniEPS.push(data[item].episodes)
    }

    this.setState({
        animeURL: aniURL,
        animeIMG: aniIMG,
        animeSYN: aniSYN,
        // animeTYP: aniTYP,
        // animeEPS: aniEPS
    })
  }

  // Anime Title and Description
  AnimeHeader = () => {
    const aniTitle = this.state.animeTitle
    const aniUpdate = this.state.animeUpdate
    const aniLegend = this.state.animeLegend

    return (
      <>
        <header id="title">
          <div className="mainHeader">
            {aniTitle}
          </div>
        </header>

        <section className="subHeader">
          <div className="update">
            <p className="up">Updated: {aniUpdate}</p>
            <p className="author">AniFlex by JC Tinio</p>
          </div>
          <div className="legend">
            <ul>
              <li className="legendM">{aniLegend[0]}</li>
              <li className="legendR">{aniLegend[1]}</li>
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
            this.setState({ viewListMode: true })
          }}>
          <ViewHeadlineIcon/>
        </button>
        <button className="displayImg" onClick={() => {
            this.setState({ viewListMode: false })
          }}>
          <ViewListIcon/>
        </button>
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
      if (titleR > 1) {
        listFinal.push(
          <li key={int} className={titleL}>
              {title1}{title2}
              <span className="R">{titleR}</span>
          </li>)
      } else {
        listFinal.push(
          <li key={int} className={titleL}>
            {title1}{title2}
            <span className="R"></span>
          </li>)
      }
      int += 1
    }
    return (
      <div className="aniList">
        {listFinal}
      </div>
    )
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
      // const aniTyp = this.state.animeTYP
      // const aniEps = this.state.animeEPS
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
              {titleL === "M"
                ? <span className="M">Movie</span>
                : <span className="T">TV</span>
              }
              {titleR === "2"
                ? <span className="R">{titleR} REWATCH</span>
                : <span className="R"></span>
              }
              {/* <span className="L"> {titleL}</span> */}
              {/* <span className=""> {aniTyp[i]}</span> */}
              {/* <span className=""> {aniEps[i]} episodes</span> */}
            </div>
            <div className="cardSynopsis">{aniSyn[i]}</div>
          </div>
        </div>
      )
      i += 1
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
          {this.state.viewListMode 
            ? <this.AnimeListMode/> 
            : <this.AnimeIMGMode />}
          <this.AnimeFooter/>
          </>
    )
  }
}
