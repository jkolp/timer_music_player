import React from 'react'
import { Route, Routes } from 'react-router-dom'

import classes from './Collapsable.module.css'
import Navigation from '../PlayerPages/Navigation.js'
import Home from '../PlayerPages/Home/Home.js'
import Playlist from '../PlayerPages/Playlist/Playlist.js'

const Collapsable = (props) => {
  return (
    <div className={ props.isExpanded ? classes.expanded : classes.collapsed }>
        <Navigation />
        <div className={classes.collapableContentContainer}>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/playlist" element={ <Playlist /> } />
            </Routes>
        </div>
    </div>
  )
}

export default Collapsable