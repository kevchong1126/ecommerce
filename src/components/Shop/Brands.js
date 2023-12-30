import React from 'react'
import styles from "./Brands.module.scss"

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/database';

const Brands = () => {
  const filterState = useSelector( state => state.databaseSlice.filters);
  const dispatch = useDispatch();

  const toggleHandler = (item) => {
    dispatch(setFilter(item))
  }

  return (
    <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.item} onClick={() => toggleHandler("bk")}>
            <div className={styles.circle} style={{backgroundColor: filterState["bk"] ? "black" : "transparent"}}></div>
            <p className={styles.label} >Birkenstock</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler("jordan")}>
            <div className={styles.circle} style={{backgroundColor: filterState["jordan"] ? "black" : "transparent"}}></div>
            <p className={styles.label}>Jordan</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler("nb")}>
            <div className={styles.circle} style={{backgroundColor: filterState["nb"] ? "black" : "transparent"}}></div>
            <p className={styles.label}>New Balance</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler("nike")}>
            <div className={styles.circle} style={{backgroundColor: filterState["nike"] ? "black" : "transparent"}}></div>
            <p className={styles.label}>Nike</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler("nf")}>
            <div className={styles.circle} style={{backgroundColor: filterState["nf"] ? "black" : "transparent"}}></div>
            <p className={styles.label}>North face</p>
          </li>
        </ul>
    </div>
  )
}

export default Brands