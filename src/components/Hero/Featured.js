import React from 'react'
import styles from "./Featured.module.scss"
import { Link } from 'react-router-dom';

const Featured = ({el}) => {
    const {image, logo, title, price, id} = el;

  return (
    <div className={styles.wrapper}>
        <Link to={`/product/${id}`}>
            <div className={styles.imgContainer}>
                <img src={process.env.PUBLIC_URL + image} alt={title}></img>
            </div>
            <div className={styles.content}>
                <img className={styles.logo} src={process.env.PUBLIC_URL + logo} alt={logo}/>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}>${price}.00</p>
            </div>
        </Link>
    </div>
  )
}

export default Featured