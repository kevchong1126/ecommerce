import React from 'react'
import styles from "./Left.module.scss"

const Left = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.top}>
            <p>Anything else?</p>
        </div>
        <div className={styles.bottom}>
            <div className={styles.card}>
                dfs
            </div>
            <div className={styles.card}>
                dfs
            </div>
            <div className={styles.card}>
                dfs
            </div>
            <div className={styles.card}>
                dfs
            </div>
        </div>
    </div>
  )
}

export default Left