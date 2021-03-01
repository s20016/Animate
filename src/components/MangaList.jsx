import React, { useEffect, useState } from 'react';

const MangaList = () => {  
  const [manga, setManga] = useState([])
  // const [isEN, setEN] = useState(true)

  // console.log(isEN)

  useEffect(() => { 
    const list = "http://localhost:3000/Animate/data/manga_list.json"
    // const list = "https://s20016.github.io/Animate/data/list.json"
    fetch(list)
      .then(res => res.json())
      .then(json => { setManga(json.manga) })

    console.log(manga)   
  }, [])

  let listFinal = []

  for (const mangatitle of manga) {
    const mal_id = mangatitle.mal_id
    const en_title = mangatitle.en_title
    const ja_title = mangatitle.ja_title
    const subtitle = mangatitle.subtitle
    const manga_type = mangatitle.type
    const manga_count = mangatitle.count
    
    listFinal.push(
      <li key={mal_id} className={
        (ani_type === "Manga") // FIX
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
    <div className="manList">{listFinal}</div>
  )
}

export default MangaList
