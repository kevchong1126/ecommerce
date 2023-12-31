import React from 'react'
import styles from "./HeroProducts.module.scss"
import { Link } from 'react-router-dom'

const HeroProducts = ({array}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {
        array.map(el => {
          return (
            <Card card={el} key={el.id}/>
          )
        })
        }
      </div>
    </div>
  )
}

const Card = ({card}) => {
    return (
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Link to={`/product/${card.id}`}>
              <img className={styles.thumbnail} src={process.env.PUBLIC_URL + card.image} alt={card.title}></img>
              <img className={styles.logo} src={process.env.PUBLIC_URL + card.logo} alt={card.logo}></img>
            </Link>
          </div>
          <div className={styles.titleContainer}>
            <Link to={`/product/${card.id}`}>
              <p>{card.title}</p>
            </Link>
          </div>
          <div className={styles.priceContainer}>
            <Link to={`/product/${card.id}`}>
              <p className={styles.price}>
                  ${card.price}.00
              </p>
            </Link>
          </div>
        </div>
    )
}
export default HeroProducts