import React from 'react'
import styles from "./Sneakers.module.scss"

/*Components*/
import SlidingText from '../components/Slider/SlidingText'
import Featured from '../components/Hero/Featured'
import HeroProduct from "../components/Slider/HeroProducts"

import json from "../json.json"

const Sneakers = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <SlidingText text={"Top picks"} />
            <Featured el={json[22]}/>
            <HeroProduct array={json.slice(20,23)} />
            <HeroProduct array={json.slice(23,26)} />
            <HeroProduct array={json.slice(26,29)} />
            <HeroProduct array={json.slice(40,43)} />
        </div>
    </div>
  )
}

export default Sneakers