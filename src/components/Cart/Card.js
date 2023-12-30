import React from 'react'
import styles from "./Card.module.scss"
import { useDispatch } from 'react-redux'
import { remove } from '../../redux/cart'

/*Components*/
import Input from './Input'

const Card = ({el}) => {
    const {image, title, price, size, amount, id } = el;
    const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>

        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <img src={'/' + image} alt={title}></img>
            </div>
            <div className={styles.center}>
                <div className={styles.top}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.size}>Size:<span className={styles.bold}>{size}</span></p>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.price}>$ {price}</p>
                </div>
            </div>
        </div>
        
        <div className={styles.right}>
            <div className={styles.top}>
                <p className={styles.x} onClick={() => dispatch(remove(id))}>X</p>
            </div>
            <div className={styles.bottom}>
                <Input amount={amount} id={id}/>
            </div>
        </div>
    </div>
  )
}

export default Card