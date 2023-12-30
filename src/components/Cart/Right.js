import React from 'react'
import styles from "./Right.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../redux/openCart'

/*Components*/
import Card from './Card'

const Right = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cartSlice);

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
            {
                items.length ? 
                items.map(el => <Card el={el} key={el.id}/>) :
                <p className={styles.empty}>Your cart is empty</p>
            }
        </div>
        <div className={styles.bottom}>
            <div className={styles.priceContainer}>
                <div className={styles.left}>
                    <p> Grand total incl. tax</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.price}>$
                    {items?.reduce((acc, val) => 
                        acc + (val.amount*val.price)
                    , 0)}
                    .00</p>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.continue} onClick={() => dispatch(close())}>Continue Shopping</button>
                <button className={styles.proceed}>Proceed to checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Right