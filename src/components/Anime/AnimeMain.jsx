import React from 'react';

// import AnimeHeader from './AnimeHeader';
import AnimeHeader2 from './AnimeHeader2'
import AnimeList from './AnimeList';
import AnimeFooter from './AnimeFooter';


export default class App extends React.Component {

  render() {
    return (
      <>
        <AnimeHeader2/>
        <AnimeList/>
        <AnimeFooter/>
      </>
    )
  }
}
