import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import classes from './PlayerFrame.module.css'
import { IoPlaySharp, IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoPauseSharp, IoCaretUpSharp, IoCaretDownSharp } from "react-icons/io5";
import { IconContext } from 'react-icons';
import Collapsable from './Collapsable.js'

const PlayerFrame = (props) => {

    const [isPlaying, setIsPlaying] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    const setIsPlayingState = () => {
        setIsPlaying( (prev) => !prev )
    }

    const toggleIsExpanded = () => {
        setIsExpanded( (prev) => !prev )
    }

    return (
        <>
            <div className={ classes.playerFrame }>
                <div className={ classes.playerFrameContainer}>
                    <div className={ classes.leftControl }>
                        <div className={ classes.leftControlBtns }>
                            <button className={ classes.skipBackBtn}> <IoPlaySkipBackSharp /> </button>
                            <button className={ classes.playPauseBtn} onClick={ setIsPlayingState }> { isPlaying ? <IoPauseSharp size='2.5em' /> : <IoPlaySharp size='2.5em' /> } </button>
                            <button className={ classes.skipForwardBtn}> <IoPlaySkipForwardSharp/> </button>
                        </div>
                        <span className={ classes.timeInfo }> 0:00 / 0:00 </span>
                    </div>
                    <div className={ classes.rightControl }>
                        <div className={ classes.songInfoContainer}>
                            <h3> Song info </h3>
                        </div>
                        <IconContext.Provider value={{ color: 'white', size: '1.2em'}}>
                            <button onClick={toggleIsExpanded} className={ classes.expandableBtn }>{ isExpanded ?  <IoCaretDownSharp /> : <IoCaretUpSharp /> }</button>
                        </IconContext.Provider> 
                    </div>
                </div>
            </div>
            <BrowserRouter>
                <Collapsable isExpanded={isExpanded}/> 
            </BrowserRouter>
        </>
    )
}

export default PlayerFrame