import React, { useEffect, useState } from 'react';

const MangaHeader = () => {  
  const [date, setDate] = useState("")
  const Background = "https://media.giphy.com/media/3ohzdLD2vN09ZavdqU/giphy.gif"

  useEffect(() => { 
    // const list = "http://localhost:3000/Animate/data/manga_list.json"
    const list = "https://s20016.github.io/Animate/data/manga_list.json"
    fetch(list)
      .then(res => res.json())
      .then(json => { setDate(json.update) })

  }, [])

  return (
    <div className="header2" style={{backgroundImage: "url(" + Background + ")"}}>
      <header id="title">
        <div className="mainHeader">Manga List</div>
      </header>
      <section className="subHeader">
        <div className="update">
          <p>Updated: {date}</p>
        </div>
        <div className="legend">
          <ul>
            <li className="legendM">Currently Reading</li>
            <li className="legendF">Finished Reading</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default MangaHeader
