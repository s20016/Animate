import React, { useState } from 'react';

import TvIcon from '@material-ui/icons/Tv';
import PublicIcon from '@material-ui/icons/Public';
import BookIcon from '@material-ui/icons/Book';

const AnimeMenu = () => {  

  return (
    // FIX TRANSLATOR
    <div className="display">
    <button className="displayList" onClick={() => {}}>
      <PublicIcon/>
    </button>
    <button className="displayList" onClick={() => {}}>
      <TvIcon/>
    </button>
    <button className="displayImg" onClick={() => {}}>
      <BookIcon/>
    </button> 
  </div>
  )
}

export default AnimeMenu