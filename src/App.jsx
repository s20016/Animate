import React from 'react';
import './css/main.css';

import AnimeHeader from './components/AnimeHeader'
import AnimeNavbar from './components/AnimeNavbar'
import AnimeMenu from './components/AnimeMenu'
import AnimeList from './components/AnimeList'
import AnimeFooter from './components/AnimeFooter'
import MangaList from './components/MangaList'

export default class App extends React.Component {

  render() {
    return (
      <>
        <AnimeHeader/>
        <AnimeNavbar/>
        {/* <AnimeMenu/> */}
        <AnimeList/>
        {/* <MangaList/> */}
        <AnimeFooter/>
      </>
    )
  }
}
