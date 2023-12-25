import React, { useState } from 'react'
import styles from "./Input.module.scss"

const Input = () => {
    const [amount, setAmount] = useState(0);

  return (
    <div className={styles.wrapper}>
        <p> - </p>
        <p>{amount}</p>
        <p> + </p>
    </div>
  )
}

export default Input