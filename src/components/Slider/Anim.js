import React, { useEffect, useRef } from 'react'
import styles from "./Anim.module.scss"
import { gsap, Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const Anim = ({text, color}) => {
    const arr = text.split("");
    const word = useRef([]);
    const container = useRef();

    useEffect(() => {
        gsap.from(word.current, {
            yPercent: 100,
            duration: 1,
            ease: Power4.easeOut,
            stagger: {
                each: 0.1
            },
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%"
            }
        })
    }, [])
  return (
    <div className={styles.wrapper}>
        <div className={`${styles.textContainer} ${color && styles.yellow}`} ref={container}>
            {
                arr.map( (el, idx) => 
                <span className={styles.letter} key={idx} ref={lett => word.current.push(lett)}>{el}</span>
                )
            }
        </div>
    </div>
  )
}


export default Anim