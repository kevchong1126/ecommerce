import React from 'react'
import styles from "./Footer.module.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>

            <div className={styles.top}>
                <div className={styles.left}>
                    <p>Developed by kevin chong</p>
                </div>
                <div className={styles.right}>
                    <ul className={styles.list}>
                        <Link to={'/shop'}><li>Shop</li></Link>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/culture'}><li>Blogs</li></Link>
                    </ul>
                    <ul className={styles.list}>
                        <Link to={'/apparel'}><li>Apparel</li></Link>
                        <Link to={'/sneakers'}><li>Sneaker</li></Link>
                        <Link to={'/accessory'}><li>Accessories</li></Link>
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
                 © 2023 HYPED Copyright
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