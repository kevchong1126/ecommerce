import React from 'react'
import styles from "./Options.module.scss"
import { Link } from 'react-router-dom';

const Options = ({el}) => {
  const {image, title, price, id} = el;

  return (
    <div className={styles.wrapper}>
      <Link to={`/product/${id}`}>
          <div className={styles.imgContainer}>
              <img src={image}></img>
          </div>
          <p className={styles.title}>{title}</p>
          <p className={styles.price}>${price}</p>
      </Link>
    </div>
  )
}

export default Options