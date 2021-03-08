import React from 'react';

const AnimeNavbar = () => {
  // TODO: Fix href, and loop code
  return (
    <div className="navbar">
      <ul className="navbar-items">

        <li className="item">
          <a href="#">
            <i class="fas fa-layer-group logo"></i>
          </a>
        </li>

        <li className="item">
          <a href="#">
            <i class="fas fa-book logo"></i>
          </a>
        </li>

        <li className="item">
          <a href="#">
            <i class="fab fa-github logo"></i>
          </a>
        </li>

      </ul>
    </div>
  )
}

export default AnimeNavbar