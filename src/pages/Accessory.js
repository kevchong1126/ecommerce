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
            <SlidingText text={"Easier life"} />
            <Featured el={json[32]}/>
            <HeroProduct array={json.slice(28,31)} />
            <HeroProduct array={json.slice(32,35)} />
            <HeroProduct array={json.slice(35,38)} />
            <HeroProduct array={json.slice(38,40)} />
        </div>
    </div>
  )
}

export default Sneakers