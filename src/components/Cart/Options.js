import React from 'react'
import styles from "./Options.module.scss"
import { Link } from 'react-router-dom';

const Options = ({el}) => {

  return (
    <div className={styles.wrapper}>
      <Link to={`/product/${el.id}`}>
          <div className={styles.imgContainer}>
              <img src={process.env.PUBLIC_URL + el.image} alt={el.id}></img>
          </div>
          <p className={styles.title}>{el.title}</p>
          <p className={styles.price}>${el.price}</p>
      </Link>
    </div>
  )
}

export default Options