import React, { useEffect, useRef } from 'react'
import styles from "./Cart.module.scss"
import { gsap, Power0 } from 'gsap'
import { useSelector } from 'react-redux'

/*Components*/
import Left from './Left'
import Right from './Right'

const Cart = () => {
  const container = useRef();
  const isOpen = useSelector( state => state.openCartSlice)

  useEffect(() => {
    if (isOpen) {
      gsap.to(container.current, {
        xPercent: -100,
        ease: Power0.easeOut,
        duration: 0.35
      })
    }else{
      gsap.to(container.current, {
        xPercent: 0,
        ease: Power0.easeOut,
        duration: 0.35
      })
    }

  }, [isOpen])

  return (
    <div className={styles.container} ref={container}>
        <div className={styles.content}>
            <div className={styles.left}>
                <Left />
            </div>
            <div className={styles.right}>
                <Right />
            </div>
        </div>
    </div>
  )
}

export default Cart