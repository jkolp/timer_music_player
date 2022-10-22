import React from 'react'

import classes from './SongItemCard.module.css'
import { HiPlus } from "react-icons/hi";

const SongItemCard = (props) => {
  return (
    <div className={ classes.songItemCardContainer }>
        <div className={ classes.thumbnailImg }>
            <img />
        </div>
        <div className={ classes.songItemInfo }>
            { props.title }
        </div>
        <div className={ classes.addToPlaylistBtn }>
            <HiPlus />
        </div>
    </div>
  )
}

export default SongItemCard