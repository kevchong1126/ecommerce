import React from 'react'
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>

            <div className={styles.top}>
                <div className={styles.left}>
                    <p>Join our community</p>
                </div>
                <div className={styles.right}>
                    <ul className={styles.list}>
                        <li>Apparel</li>
                        <li>Sneaker</li>
                        <li>Accessories</li>
                    </ul>
                    <ul className={styles.list}>
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                        <li>Shipping Policy</li>
                    </ul>
                </div>
            </div>

            <div className={styles.center}>
                <p className={styles.title}>HYPED</p>
            </div>

            <div className={styles.bottom}>
                <div className={styles.left}>
                 © 2023 HYPED, Developed by kevin chong
                </div>  
                <div className={styles.right}>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer