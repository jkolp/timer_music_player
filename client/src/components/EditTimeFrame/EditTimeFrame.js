import React, { useState, useRef } from 'react'

import FrameCard from '../Layout/FrameCard.js'
import classes from './EditTimeFrame.module.css'


const EditTimeFrame = (props) => {

    const [isHourValid, setIsHourValid] = useState(true)
    const [isMinValid, setIsMinValid] = useState(true)
    const [isSecondValid, setIsSecondValid] = useState(true)

    const hourRef = useRef(null)
    const minRef = useRef(null)
    const secondRef = useRef(null)

    // TODO
    // const onClick = (event) => {
    // // sets the cursor to last digit to easily override existing digits
    // }

    const onChange = (event) => {
        // change input focus color if exceeds limit
        if (event.target.value.length < 3) {
            switch (event.target.id) {
                case 'hour': 
                    return;
                case 'minute': 
                    minRef.current.value > 60 ? minRef.current.value = 59 : minRef.current.value = minRef.current.value
                    return;
                case 'second': 
                    secondRef.current.value > 60 ? secondRef.current.value = 59 : secondRef.current.value = secondRef.current.value
                    return;
                default:
                    return;
            }
        } 

        // Limit text input to two digits
        switch (event.target.id) {
            case 'hour': 
                hourRef.current.value = event.target.value[2]
                return;
            case 'minute': 
                minRef.current.value = event.target.value[2]
                return;
            case 'second': 
                secondRef.current.value = event.target.value[2]
                return;
            default:
                return;
        }
    }

    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape") {
          event.target.blur();
        }
      }

    const onBlur = (event) => {
        // Add 0 infront of single digit inputs
        if (event.target.value.length === 1) {
            switch (event.target.id) {
                case 'hour': 
                    hourRef.current.value = "0" + event.target.value
                    return;
                case 'minute': 
                    minRef.current.value = "0" + event.target.value
                    return;
                case 'second': 
                    secondRef.current.value = "0" + event.target.value
                    return;
                default:
                    return;
            }
        }
    }

    const onSet = () => {
        console.log(hourRef.current.value)
        const hour = hourRef.current.value == "" || hourRef.current.value == "00" ? "" : hourRef.current.value + ":" 
        const minute = minRef.current.value == "" ? "00:" : minRef.current.value + ":" 
        const second = secondRef.current.value == "" ? "00" : secondRef.current.value 
        const startingTime = hour + minute + second

        props.handleSetIsEditing()
        props.handleSetTime(startingTime)
    }

    return (
        <div className={classes.editTimeFrame}>
            <FrameCard className={classes.frameCardCustom}> 
                <div className={classes.timeDigitsContainer}>
                    <div className={classes.inputWrapper}>
                        <input 
                            type="text" 
                            ref={hourRef}
                            id='hour'
                            placeholder="00"
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                            // onClick={onClick}
                            onBlur={onBlur}
                            aria-label="Hour field"
                            maxLength='3'
                        />
                    </div>
                    <div>
                        :
                    </div>
                    <div className={classes.inputWrapper}>
                        <input 
                            type="text" 
                            id='minute' 
                            ref={minRef}
                            placeholder="00" 
                            onChange={onChange} 
                            onKeyDown={onKeyDown}
                            // onClick={onClick}
                            onBlur={onBlur}
                            aria-label="Minute field"
                            maxLength='3'
                        /> 
                    </div>
                    <div>
                        :
                    </div>
                    <div className={classes.inputWrapper}>
                        <input 
                            type="text" 
                            id='second' 
                            ref={secondRef}
                            placeholder="00" 
                            onChange={onChange} 
                            onKeyDown={onKeyDown}
                            // onClick={onClick}
                            onBlur={onBlur}
                            aria-label="Second field"
                            maxLength='3'
                        />
                    </div>
                </div>
                <div className={ classes.timeLabels }>
                    <span> Hours </span>
                    <span> Minutes </span>
                    <span> Seconds </span>
                </div>
            </FrameCard>
            <div className={classes.editBtnFrame}>
                <button onClick={onSet} 
                        disabled={isHourValid && isMinValid && isSecondValid ? false : true}> 
                            Set 
                </button>
                <button onClick={props.handleSetIsEditing}> Cancel </button>
            </div>
        </div>
    )
}

export default EditTimeFrame