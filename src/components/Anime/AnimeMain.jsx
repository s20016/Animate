import React from 'react';

import AnimeHeader from './AnimeHeader';
import AnimeList from './AnimeList';
import AnimeFooter from './AnimeFooter';


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
