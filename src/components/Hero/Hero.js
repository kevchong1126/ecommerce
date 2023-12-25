import React from 'react'
import styles from "./Hero.module.scss"
import { Link } from 'react-router-dom'

const Hero = ({image, alt, id}) => {


  return (
    <div className={styles.wrapper}>
      <Link to={`/product/${id}`}>
        <div className={styles.imgContainer}>
            <img src={image} alt={alt}></img>
        </div>
      </Link>
    </div>
  )
}

export default Hero