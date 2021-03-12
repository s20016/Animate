import React, { useEffect, useState } from 'react';

import TranslateIcon from '@material-ui/icons/Translate';
import Button from '@material-ui/core/Button';

const MangaList = () => {  
  const [manga, setManga] = useState([])
  const [is_EN, setEN] = useState(true)

  useEffect(() => { 
    const list = "http://localhost:3000/Animate/data/manga_list.json"
    // const list = "https://s20016.github.io/Animate/data/manga_list.json"
    
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
        (status === "FR")
          ? (is_EN) ? "A" : "A ja_title"
          : (is_EN) ? "CR" : "M ja_title"
      }>
        { (subtitle !== "")
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
      <Button className="displayList" onClick={() => {
        setEN(!is_EN)
      }}>
        <TranslateIcon className="translateLogo"/>
      </Button>
      </div>
      <div className="mangaList">
        {listFinal}
      </div>
    </>
  )
}

export default MangaList
