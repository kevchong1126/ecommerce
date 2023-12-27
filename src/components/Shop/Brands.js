import React, { useState } from 'react'
import styles from "./Brands.module.scss"

const Brands = () => {
  const [added, setAdded] = useState({
    "bk"  : false,
    "jordan" : false,
    "nb" : false,
    "nike" : false,
    "nf" : false
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
          <li className={styles.item} onClick={() => toggleHandler("bk")}>
            <div className={styles.circle} style={{backgroundColor: added["bk"] ? "black" : "transparent"}}></div>
            <p className={styles.label} >Birkenstock</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler("jordan")}>
            <div className={styles.circle} style={{backgroundColor: added["jordan"] ? "black" : "transparent"}}></div>
            <p className={styles.label}>Jordan</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler("nb")}>
            <div className={styles.circle} style={{backgroundColor: added["nb"] ? "black" : "transparent"}}></div>
            <p className={styles.label}>New Balance</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler("nike")}>
            <div className={styles.circle} style={{backgroundColor: added["nike"] ? "black" : "transparent"}}></div>
            <p className={styles.label}>Nike</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler("nf")}>
            <div className={styles.circle} style={{backgroundColor: added["nf"] ? "black" : "transparent"}}></div>
            <p className={styles.label}>North face</p>
          </li>
        </ul>
    </div>
  )
}

export default Brands