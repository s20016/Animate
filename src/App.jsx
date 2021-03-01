import React from 'react';
import './css/main.css';

import AnimeHeader from './components/AnimeHeader'
import AnimeMenu from './components/AnimeMenu'
import AnimeList from './components/AnimeList'
import MangaList from './components/MangaList'
import AnimeFooter from './components/AnimeFooter'

export default class App extends React.Component {

  render() {
    return (
      <>
        <AnimeHeader/>
        <AnimeMenu/>
        <AnimeList/>
        {/* <MangaList/> */}
        <AnimeFooter/>
      </>
    )
  }
}
