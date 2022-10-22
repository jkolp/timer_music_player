import React, { useEffect, useState, useRef } from 'react'

import classes from './App.module.css'
import PlayerFrame from './components/PlayerFrame/PlayerFrame.js'
import TimeFrame from './components/TimeFrame/TimeFrame.js'
import EditTimeFrame from './components/EditTimeFrame/EditTimeFrame.js'

const App = () => {

    // Timer states
    const [isEditing, setIsEditing] = useState(false) 
    const [format, setFormat] = useState("00:00")
    const [timer, setTimer] = useState("00:00")
    const [isCounting, setIsCounting] = useState(false)

    // Collapsable states
    const [isCollapsed, setIsCollapsed] = useState(true)

    // Store total seconds
    let timerRef;

    const handleSetTime = (time) => {
      setTimer( time )
    }

    const handleSetIsEditing = () => {
      setIsEditing( (prev) => !prev )
    }

    const handleSetFormat = (format) => {
      setFormat(format)
    }

    let startTimer = useRef(null)

    const onStart = () => {
      // if timer is at 00:00, do nothing
      if (timer === "00:00") return

      startTimer.current = setInterval( ()=>{
        if ( timerRef === 0 ) {
          clearInterval(startTimer.current);
          setIsCounting(false)
          return 
        }
        updateTimer()
      }, 1000)
      setIsCounting( (prev) => !prev )
    }

    const onPause = () => {
      setIsCounting( (prev) => !prev )
      clearInterval(startTimer.current)
    }

    const updateTimer = () => {
      setTimer( (prevTime) => {
        // Decrease by 1 from the total second
        let totalSeconds = getSeconds(prevTime) -1
        timerRef = totalSeconds;
        let timeString;

        // Convert totalSeconds to hour, minute, and second to allow max hour = 99
        let hour = Math.floor(totalSeconds / 3600);
        let minute = Math.floor(totalSeconds % 3600 / 60);
        let second = Math.floor(totalSeconds % 3600 % 60);

        // Add 0 in front if single digt
        hour = hour < 10 ? "0" + hour : hour
        minute = minute < 10 ? "0" + minute : minute
        second = second < 10 ? "0" + second : second

        // Represent HH:mm:ss if totalSeconds is over 3600(1hr), else mm:ss
        totalSeconds >= 3600 ? timeString = hour + ":" + minute + ":" + second : timeString = minute + ":" + second
      
        return timeString;
      })
    }

    const getSeconds = (time) => {
      // convert string time to total seconds
      let timeArr = time.split(':'); 
      let hour = timeArr.length === 3 ? timeArr[0] : 0
      let minute = timeArr.length === 2 ? timeArr[0] : timeArr[1]
      let second = timeArr.length ===3 ? timeArr[2] : timeArr[1]

      let seconds = (+hour) * 60 * 60 + (+minute) * 60 + (+second);

      return seconds
    }

    return (
      <> 
          <div className={classes.timerFrameWrapper}>
            <div>
            { !isEditing ? 
                <TimeFrame 
                  handleSetIsEditing={handleSetIsEditing}
                  format={format}
                  timer={timer}
                  onStart={onStart}
                  onPause={onPause}
                  isCounting={isCounting}
                /> 
              : <EditTimeFrame 
                  handleSetIsEditing={handleSetIsEditing}
                  handleSetFormat={handleSetFormat}
                  handleSetTime={handleSetTime}
                />  
            }
            </div>
          </div>    
          <PlayerFrame />
      </>
    )
}

export default App