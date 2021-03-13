import React from 'react';
import { motion } from 'framer-motion';

import MangaHeader from './MangaHeader';
import MangaList from './MangaList';
import MangaFooter from './MangaFooter';

const PageTransition = {
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: "-100vw"
  }
}

export default class App extends React.Component {

  render() {
    return (
      <motion.div initial="out" animate="in" exit="out" variants={PageTransition}>
        <MangaHeader/>
        <MangaList/>
        <MangaFooter/>
      </motion.div>
    )
  }
}
