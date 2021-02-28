import React, { useEffect, useState } from 'react';

const AnimeList = () => {  
  const [anime, setAnime] = useState([])
  // const [isEN, setEN] = useState(true)

  // console.log(isEN)

  useEffect(() => { 
    const list = "http://localhost:3000/Animate/data/list.json"
    // const list = "https://s20016.github.io/Animate/data/list.json"
    fetch(list)
      .then(res => res.json())
      .then(json => { setAnime(json.anime) })

    // console.log(anime)   
  }, [])

  let listFinal = []

  for (const anititle of anime) {
    const mal_id = anititle.mal_id
    const en_title = anititle.en_title
    const ja_title = anititle.ja_title
    const subtitle = anititle.subtitle
    const ani_type = anititle.type
    const ani_count = anititle.count
    
    listFinal.push(
      <li key={mal_id} className={
        (ani_type === "Anime") // FIX
          ? (true) ? "A" : "A ja_title"
          : (true) ? "M" : "M ja_title"
      }>
        { (subtitle !== "") // FIX
          ? <>{ (true) ? en_title : ja_title }/ {subtitle}</>
          : <>{ (true) ? en_title : ja_title }</>
        }
        { (ani_count > 1)
          ? <span className="R">{ani_count}</span>
          : <span className="R"></span>
        }
      </li>
    )
  }

  return (
    <div className="aniList">{listFinal}</div>
  )
}

export default AnimeList