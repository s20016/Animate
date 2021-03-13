import React from 'react';
import { motion } from 'framer-motion';

// import AnimeHeader from './AnimeHeader';
import AnimeHeader2 from './AnimeHeader2'
import AnimeList from './AnimeList';
import AnimeFooter from './AnimeFooter';

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
        <AnimeHeader2/>
        <AnimeList/>
        <AnimeFooter/>
      </motion.div>
    )
  }
}
