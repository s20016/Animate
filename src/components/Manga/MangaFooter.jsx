import React, { useEffect, useState } from 'react';

const MangaFooter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => { 
    const list = "http://localhost:3000/Animate/data/manga_list.json"
    // const list = "https://s20016.github.io/Animate/data/manga_list.json"
    fetch(list)
      .then(res => res.json())
      .then(json => { setCount(json.manga) })

  }, [])

  return (
    <div className="footer">
      <div className="total">
        <p className="count">{count.length} Manga</p>
      </div>
    </div>
  )
}

export default MangaFooter
