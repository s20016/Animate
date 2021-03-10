import React, { useEffect, useState } from 'react';

// import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';

const AnimeFooter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => { 
    const list = "http://localhost:3000/Animate/data/anime_list.json"
    // const list = "https://s20016.github.io/Animate/data/list.json"
    fetch(list)
      .then(res => res.json())
      .then(json => { setCount(json.anime) })

  }, [])

  return (
    <div className="footer">
      <div className="total">
        <p className="count">{count.length} Anime</p>
      </div>
      {/* <div className="btt">
        <a href="#title" className="gotopbtn">
          <KeyboardArrowUpOutlinedIcon className="btn" />
        </a>
      </div> */}
    </div>
  )
}

export default AnimeFooter
