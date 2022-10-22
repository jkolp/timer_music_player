import React from 'react'
import { GoSearch } from "react-icons/go"

import classes from './Navigation.module.css'

import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className={classes.navBar}>
        <nav>
            <button>
                <NavLink to='/' end>
                    Home 
                </NavLink>
            </button>
            <button>
                <NavLink to='/playlist'>
                    Playlist 
                </NavLink>
            </button>
            <button className={classes.searchBtn}> <GoSearch /> Search </button>
        </nav>
    </div>
  )
}

export default Navigation