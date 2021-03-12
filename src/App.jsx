import React from 'react';
import './css/main.css';
import { Route } from 'react-router-dom';

import MainNavbar from './components/Main/MainNavbar';
import AnimeMain from './components/Anime/AnimeMain';
import MangaMain from './components/Manga/MangaMain';
import MainTopScroll from './components/Main/MainTopScroll';

export default class App extends React.Component {

  render() {
    return (
      <>
        <MainNavbar/>
        <MainTopScroll showBelow={200} />
        <Route exact path="/" component={AnimeMain} />
        <Route exact path="/Manga" component={MangaMain} />
      </>
    )
  }
}
