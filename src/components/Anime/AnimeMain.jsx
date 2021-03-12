import React from 'react';

import AnimeHeader from './AnimeHeader';
import AnimeList from './AnimeList';
import AnimeFooter from './AnimeFooter';

import AnimeHeader2 from './AnimeHeader2'

export default class App extends React.Component {

  render() {
    return (
      <>
        {/* <AnimeHeader/> */}
        <AnimeHeader2/>
        <AnimeList/>
        <AnimeFooter/>
      </>
    )
  }
}
