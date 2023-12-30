import React from 'react'
import styles from "./ProductId.module.scss"

/*Components*/
import Left from './Left'
import Right from './Right'

const ProductId = () => {

  return (
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <Left />    
        </div>
        <div className={styles.right}>
            <Right />
        </div>
    </div>
  )
}

export default ProductId