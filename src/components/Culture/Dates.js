import React from 'react'
import styles from "./Dates.module.scss"

const Dates = ({category, date, author, time}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.flex}>
            <div className={styles.heading}>
                Category
            </div>
            <div className={styles.content}>
                {category}
            </div>
        </div>
        <div className={styles.flex}>
            <div className={styles.heading}>
                Date
            </div>
            <div className={styles.content}>
                {date}
            </div>
        </div>
        <div className={styles.flex}>
            <div className={styles.heading}>
                Author
            </div>
            <div className={styles.content}>
                {author}
            </div>
        </div>
        <div className={styles.flex}>
            <div className={styles.heading}>
                Read Time
            </div>
            <div className={styles.content}>
                {time}
            </div>
        </div>
    </div>
  )
}

export default Dates