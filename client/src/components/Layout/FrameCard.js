import React from 'react'

import classes from './FrameCard.module.css'

const FrameCard = (props) => {
  return (
    <div className={`${classes.frameCard} ${props.className}`}>
        { props.children }
    </div>
  )
}

export default FrameCard