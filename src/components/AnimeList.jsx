import React, { useEffect, useState } from 'react';

const AnimeList = () => {  
  const [anime, setAnime] = useState([])

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
        (type === "Anime") // FIX
          ? (true) ? "A" : "A ja_title"
          : (true) ? "M" : "M ja_title"
      }>
        { (subtitle !== "") // FIX
          ? <>{ (false) ? en_title : ja_title }/ {subtitle}</>
          : <>{ (false) ? en_title : ja_title }</>
        }
        { (count > 1)
          ? <span className="R">{count}</span>
          : <span className="R"></span>
        }
      </li>
    )
  }

  return (
    <div className="animeList">{listFinal}</div>
  )
}

export default AnimeList
