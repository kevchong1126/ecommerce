import React from 'react'
import styles from "./Right.module.scss"
import { useDispatch } from 'react-redux'
import { close } from '../../redux/openCart'

/*Components*/
import Card from './Card'

const Right = () => {
    const dispatch = useDispatch();
    
  return (
    <div className={styles.wrapper}>
        <div className={styles.top}>
            <div className={styles.left}>
                <p>Your bag</p>
            </div>
            <div className={styles.right} onClick={() => dispatch(close())}>
                Close
            </div>
        </div>
        <div className={styles.center}>
            <Card />

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
                <button className={styles.proceed}>Proceed to checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Right