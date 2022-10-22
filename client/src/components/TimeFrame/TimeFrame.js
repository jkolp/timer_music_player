import React, { useState, useRef, useEffect } from 'react'

import classes from './TimeFrame.module.css'
import FrameCard from '../Layout/FrameCard.js'

const TimeFrame = (props) => {

    return (
        <>
            <FrameCard>
                <span> {props.timer} </span>
            </FrameCard>
            <div className={classes.editFrame}>
                    { props.isCounting ? 
                        <button onClick={props.onPause}> Pause </button> 
                        : <button onClick={props.onStart}> Start </button> }
                    
                    <button onClick={props.handleSetIsEditing}> Edit </button>
            </div>
        </>
    )
}

export default TimeFrame

