import React, { useEffect, useState } from 'react';

const MangaList = () => {  
  const [manga, setManga] = useState([])

  useEffect(() => { 
    const list = "http://localhost:3000/Animate/data/manga_list.json"
    // const list = "https://s20016.github.io/Animate/data/list.json"
    
    fetch(list)
      .then(res => res.json())
      .then(json => { setManga(json.manga) })
  }, [])
    
  let listFinal = []
  
  for (const title of manga) {
    const mal_id = title.mal_id
    const en_title = title.en_title
    const ja_title = title.ja_title
    const subtitle = title.subtitle
    const status = title.status
    const count = title.count
    
    listFinal.push(
      <li key={mal_id} className={
        (status === "FR") // FIX
          ? (true) ? "A" : "A ja_title"
          : (true) ? "CR" : "M ja_title"
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
    <div className="mangaList">{listFinal}</div>
  )
}

export default MangaList
