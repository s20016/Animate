import React, { useEffect, useState } from 'react';

const AnimeFooter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => { 
    // const list = "http://localhost:3000/Animate/data/anime_list.json"
    const list = "https://s20016.github.io/Animate/data/anime_list.json"
    fetch(list)
      .then(res => res.json())
      .then(json => { setCount(json.anime) })

  }, [])

  return (
    <div className="footer">
      <div className="total">
        <p className="count">{count.length} Anime</p>
      </div>
    </div>
  )
}

export default AnimeFooter
