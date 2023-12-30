import React from 'react'
import styles from "./Input.module.scss"
import { useDispatch } from 'react-redux'
import { increase, subtract } from '../../redux/cart'
const Input = ({amount, id}) => {
  const dispatch = useDispatch();

  const decreaseHandler = () => {
    if (amount > 1) dispatch(subtract(id))
  }
  return (
    <div className={styles.wrapper}>
        <p className={styles.plus} onClick={() => decreaseHandler()}> - </p>
        <p>{amount}</p>
        <p className={styles.plus} onClick={() => dispatch(increase(id))}> + </p>
    </div>
  )
}

export default Input