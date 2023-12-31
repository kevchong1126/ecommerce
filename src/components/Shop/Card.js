import React from 'react'
import styles from "./Card.module.scss"
import { Link } from "react-router-dom"

const Card = ({el}) => {

  return (
    <div className={styles.wrapper}>

       <Link to={`/product/${el.id}`}>
        <div className={styles.imgContainer}>
            <img src={process.env.PUBLIC_URL + el.image} alt={el.title} className={styles.thumbnail}></img>
            <img src={process.env.PUBLIC_URL + el.logo} alt={el.brand} className={styles.logo}></img>
        </div>
       </Link>
            
        <Link to={`/product/${el.id}`}>
            <p className={styles.title}>{el.title}</p>
        </Link>

        <Link to={`/product/${el.id}`}>
            <p className={styles.price}>${el.price}.00</p>
        </Link>
    
    </div>
  )
}

export default Card