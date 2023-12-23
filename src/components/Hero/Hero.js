import React from 'react'
import styles from "./Hero.module.scss"

const Hero = ({image, alt}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
            <img src={image} alt={alt}></img>
        </div>
    </div>
  )
}

export default Hero