import React from 'react';
import { Link } from 'react-router-dom';

import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import MenuBookIcon from '@material-ui/icons/MenuBook';


const MainNavbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-items">
        <li className="item">
            <Link to="/">
              <LaptopChromebookIcon className="logo"/>
            </Link>
        </li>
        <li className="item">
            <Link to="/Manga">
              <MenuBookIcon className="logo"/>
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default MainNavbar