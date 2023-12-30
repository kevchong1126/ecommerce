import React from 'react'
import styles from "./Sneakers.module.scss"

/*Components*/
import SlidingText from '../components/Slider/SlidingText'
import Featured from '../components/Hero/Featured'
import HeroProduct from "../components/Slider/HeroProducts"

import json from "../json"

const Sneakers = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <SlidingText text={"Fire Sneakers"} />
            <Featured el={json[1]}/>
            <HeroProduct array={json.slice(0,3)} />
            <HeroProduct array={json.slice(3,6)} />
            <HeroProduct array={json.slice(6,9)} />
            <HeroProduct array={json.slice(12,15)} />
        </div>
    </div>
  )
}

export default Sneakers