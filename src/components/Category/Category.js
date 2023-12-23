import React, { useEffect, useRef } from 'react'
import styles from "./Category.module.scss"
import { Link } from 'react-router-dom';

import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Category = ({img1, url1, img2, url2, img3, url3}) => {
    const masks = useRef([]);
    const container = useRef();

    useEffect(() => {
        gsap.to(masks.current, {
            yPercent: -100,
            ease: Power4.easeOut,
            duration: 1.6,
            stagger:{
                each: 0.15
            },
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%"
            }
        })
    }, [])
  return (
    <div className={styles.wrapper}>
        <div className={styles.categories} ref={container}>
            <div className={styles.category}>
                <div className={styles.imgContainer}>
                    <Link to={url1}>
                        <img src={img1} alt={url1}></img>
                    </Link>
                    <div className={styles.mask} ref={el => masks.current.push(el)}></div>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.imgContainer}>
                    <Link to={url2}>
                        <img src={img2} alt={url2}></img>
                    </Link>
                    <div className={styles.mask} ref={el => masks.current.push(el)}></div>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.imgContainer}>
                    <Link to={url3}>
                        <img src={img3} alt={url3}></img>
                    </Link>
                    <div className={styles.mask} ref={el => masks.current.push(el)}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category