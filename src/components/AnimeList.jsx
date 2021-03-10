import React, { useEffect, useState } from 'react';

import TranslateIcon from '@material-ui/icons/Translate';

const AnimeList = () => {  
  const [anime, setAnime] = useState([])
  const [is_EN, setEN] = useState(true)

  useEffect(() => { 
    const list = "http://localhost:3000/Animate/data/anime_list.json"
    // const list = "https://s20016.github.io/Animate/data/list.json"

    fetch(list)
      .then(res => res.json())
      .then(json => { setAnime(json.anime) }) 
  }, [])

  let listFinal = []

  for (const title of anime) {
    const mal_id = title.mal_id
    const en_title = title.en_title
    const ja_title = title.ja_title
    const subtitle = title.subtitle
    const type = title.type
    const count = title.count
    
    listFinal.push(
      <li key={mal_id} className={
        (type === "TV") // FIX
          ? (is_EN) ? "A" : "A ja_title"
          : (is_EN) ? "M" : "M ja_title"
      }>
        { (subtitle !== "") // FIX
          ? <>{ (is_EN) ? en_title : ja_title }/ {subtitle}</>
          : <>{ (is_EN) ? en_title : ja_title }</>
        }
        { (count > 1)
          ? <span className="R">{count}</span>
          : <span className="R"></span>
        }
      </li>
    )
  }

  return (
    <>
    <div className="display">
      <button className="displayList" onClick={() => { 
        setEN(!is_EN)
        }}>
        <TranslateIcon/>
      </button>
    </div>
      <div className="animeList">
        {listFinal}
      </div>
    </>
  )
}

export default AnimeList
