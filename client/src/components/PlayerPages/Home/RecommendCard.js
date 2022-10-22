import React from 'react'

import classes from './RecommendCard.module.css'
import SongItemCard from './SongItemCard.js'
import { GrNext, GrPrevious } from "react-icons/gr";

const RecommendCard = (props) => {
  return (
    <div className={classes.recommendCardContainer}>
        <div className={ classes.labelContainer }>
            <h2> { props.label } </h2>
            <div>
              <GrPrevious />
              <GrNext />
            </div>
        </div>
        <div className={ classes.recSongList }>
            <ul>
                <li> <SongItemCard title="Champion"/> </li>
                <li> <SongItemCard title="Champion"/> </li>
                <li> <SongItemCard title="Champion"/> </li>
                <li> <SongItemCard title="Champion"/> </li>
                <li> <SongItemCard title="Champion"/> </li>
                <li> <SongItemCard title="Champion"/> </li>
                <li> <SongItemCard title="Champion"/> </li>
                <li> <SongItemCard title="Champion"/> </li>
                <li> <SongItemCard title="Champion"/> </li>
                <li> <SongItemCard title="Champion"/> </li>
                <li> <SongItemCard title="Champion"/> </li>
                <li> <SongItemCard title="Champion"/> </li>
                
            </ul>
        </div>
    </div>
  )
}

export default RecommendCard