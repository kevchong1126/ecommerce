import React from 'react'
import styles from "./Prices.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { setPrice } from '../../redux/database';

const Prices = () => {
    const dispatch = useDispatch();
    const priceState = useSelector( state => state.databaseSlice.prices);

    const toggleHandler = (item) => {
      dispatch(setPrice(item))
    }

  return (
    <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.item} onClick={() => toggleHandler(1)}>
            <div className={styles.circle} style={{backgroundColor: priceState[1] ? "black" : "transparent"}}></div>
            <p className={styles.label}>$0 - $100</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler(2)}>
            <div className={styles.circle} style={{backgroundColor: priceState[2] ? "black" : "transparent"}}></div>
            <p className={styles.label}>$101 - 200</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler(3)}>
            <div className={styles.circle} style={{backgroundColor: priceState[3] ? "black" : "transparent"}}></div>
            <p className={styles.label}>$201 - 300</p>
          </li>
          <li className={styles.item} onClick={() => toggleHandler(4)}>
            <div className={styles.circle} style={{backgroundColor: priceState[4] ? "black" : "transparent"}}></div>
            <p className={styles.label}>+$301-</p>
          </li>
        </ul>
    </div>
  )
}

export default Prices