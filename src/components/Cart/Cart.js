import React from 'react'
import styles from "./Cart.module.scss"

/*Components*/
import Left from './Left'
import Right from './Right'

const Cart = () => {
  return (
    <div className={styles.container}>
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