import React from 'react';
import './css/main.css';

import AnimeHeader from './components/AnimeHeader'
import AnimeList from './components/AnimeList'
import AnimeFooter from './components/AnimeFooter'

export default class App extends React.Component {

  render() {
    return (
      <>
        <AnimeHeader/>
        <AnimeList/>
        <AnimeFooter/>
      </>
    )
  }
}