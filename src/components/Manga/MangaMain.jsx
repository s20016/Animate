import React from 'react';

import MangaHeader from './MangaHeader';
import MangaList from './MangaList';
import MangaFooter from './MangaFooter';


export default class App extends React.Component {

  render() {
    return (
      <>
        <MangaHeader/>
        <MangaList/>
        <MangaFooter/>
      </>
    )
  }
}
