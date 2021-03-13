import React from 'react';
import './css/main.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import MainNavbar from './components/Main/MainNavbar';
import AnimeMain from './components/Anime/AnimeMain';
import MangaMain from './components/Manga/MangaMain';
import MainTopScroll from './components/Main/MainTopScroll';


export default class App extends React.Component {
  
  render() {
    return (
      <>
        <MainNavbar/>
        <MainTopScroll showBelow={210} />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/Animate" component={AnimeMain} />
            <Route exact path="/Animate/Manga" component={MangaMain} />
          </Switch>
        </AnimatePresence>
      </>
    )
  }
}
