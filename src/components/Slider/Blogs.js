import React from 'react'
import styles from "./Blogs.module.scss"
import { Link } from 'react-router-dom'


const Blogs = ({images, url, titles}) => {
  return (
    <div className={styles.wrapper}>
      
        <div className={styles.blogs}>

            <div className={styles.blog}>
                <div className={styles.imgContainer}>
                    <Link to={url[0]}>
                        <img src={images[0]} alt={url[0]}></img>
                    </Link>
                </div>
                <div className={styles.title}>
                    <Link to={url[0]}>{titles[0]}</Link>
                </div>
            </div>

            <div className={styles.blog}>
                <div className={styles.imgContainer}>
                    <Link to={url[1]}>
                        <img src={images[1]} alt={url[1]}></img>
                    </Link>
                </div>
                <div className={styles.title}>
                    <Link to={url[1]}>{titles[1]}</Link>
                </div>
            </div>

            <div className={styles.blog}>
                <div className={styles.imgContainer}>
                    <Link to={url[2]}>
                        <img src={images[2]} alt={url[2]}></img>
                    </Link>
                    
                </div>
                <div className={styles.title}>
                    <Link to={url[2]}>{titles[2]}</Link>
                </div>
            </div>

            <div className={styles.blog}>
                <div className={styles.imgContainer}>
                    <Link to={url[3]}>
                        <img src={images[3]} alt={url[3]}></img>
                    </Link>
                </div>
                <div className={styles.title}>
                    <Link to={url[3]}>{titles[3]}</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs