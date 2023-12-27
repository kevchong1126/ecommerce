import React, { useState } from 'react'
import styles from "./Prices.module.scss"

const Prices = () => {
    const [added, setAdded] = useState({
        1  : false,
        2 : false,
        3 : false,
        4 : false,
      });
    
      const toggleHandler = (item) => {
        setAdded(prev => {
          return (
            {
              ...prev,
              [item] : !prev[item]
            }
          )
        })
    
      }
  return (
    <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.item} onClick={() => toggleHandler(1)}>
            <div className={styles.circle} style={{backgroundColor: added["1"] ? "black" : "transparent"}}></div>
            <p className={styles.label}>$0 - $100</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler(2)}>
            <div className={styles.circle} style={{backgroundColor: added["2"] ? "black" : "transparent"}}></div>
            <p className={styles.label}>$101 - 200</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler(3)}>
            <div className={styles.circle} style={{backgroundColor: added["3"] ? "black" : "transparent"}}></div>
            <p className={styles.label}>$201 - 300</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler(4)}>
            <div className={styles.circle} style={{backgroundColor: added["4"] ? "black" : "transparent"}}></div>
            <p className={styles.label}>+$301-</p>
          </li>
        </ul>
    </div>
  )
}

export default Prices