import React from 'react'
import styles from "./Card.module.scss"

/*Components*/
import Input from './Input'

const Card = ({img, title, price, size, id}) => {
  return (
    <div className={styles.wrapper}>

        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <img src={img}></img>
            </div>
            <div className={styles.center}>
                <div className={styles.top}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.size}>Size: <span className={styles.bold}>{size}</span></p>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.price}>$ {price}</p>
                </div>
            </div>
        </div>
        
        <div className={styles.right}>
            <div className={styles.top}>
                <p className={styles.x}>X</p>
            </div>
            <div className={styles.bottom}>
                <Input />
            </div>
        </div>
    </div>
  )
}

export default Card