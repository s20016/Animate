import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faPlayCircle, faMehBlank, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const AnimeNavbar = () => {
  // TODO: Fix href, and loop code
  return (
    <div className="navbar">
      <ul className="navbar-items">

        <li className="item">
          <a href="#">
            <FontAwesomeIcon icon={faChevronCircleLeft} className="logo" />
          </a>
        </li>

        <li className="item">
          <a href="#">
            <FontAwesomeIcon icon={faPlayCircle} className="logo" />
          </a>
        </li>

        <li className="item">
          <a href="#">
            <FontAwesomeIcon icon={faMehBlank} className="logo" />
          </a>
        </li>

        <li className="item">
          <a href="#">
            <FontAwesomeIcon icon={faUserCircle} className="logo"/>
          </a>
        </li>

      </ul>
    </div>
  )
}

export default AnimeNavbar