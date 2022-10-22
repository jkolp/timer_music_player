import React, { useEffect, useState } from 'react'
import classes from './Home.module.css'

import RecommendCard from './RecommendCard.js'

const Home = () => {

  const [lofiList, setLofiList] = useState([])

  useEffect( () => { 
    // 1. Create custom hook that calls to YouTube API
    // 2. Use the custom hook in this component to retrieve list of lofi, workout, and nature songs
    // 3. useEffect to retrieve em on load

  }, [])

  return (
    <div className={classes.homeContainer}>
      <RecommendCard label="Lofi"/>
    </div>
  )
}

export default Home