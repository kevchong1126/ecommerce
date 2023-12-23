import React from 'react'
import styles from "./Right.module.scss"

const Right = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.top}>
            <div className={styles.left}>
                <p>Your bag</p>
            </div>
            <div className={styles.right}>
                Close
            </div>
        </div>
        <div className={styles.center}>
            <div className={styles.card}>
                dsasd
            </div>
            <div className={styles.card}>
                dsasd
            </div>
            <div className={styles.card}>
                dsasd
            </div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.priceContainer}>
                <div className={styles.left}>
                    <p> Grand total incl. tax</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.price}>$999.56</p>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.continue}>Continue Shopping</button>
                <button className={styles.continue}>Proceed to checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Right