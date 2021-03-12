import React, { useEffect, useState } from 'react';

const MangaHeader = () => {  
  const [date, setDate] = useState("Loading Date")

  useEffect(() => { 
    const list = "http://localhost:3000/Animate/data/manga_list.json"
    // const list = "https://s20016.github.io/Animate/data/manga_list.json"
    fetch(list)
      .then(res => res.json())
      .then(json => { setDate(json.update) })

  }, [])

  return (
    <>
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
            {/* <li className="legendR">Watch Count</li> */}
          </ul>
        </div>
      </section>
    </>
  )
}

export default MangaHeader
