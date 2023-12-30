import React from 'react'
import styles from "./Grid.module.scss"

/*Components*/
import Search from './Search'
import Cards from './Cards'

const Grid = () => {
  return (
    <div className={styles.wrapper}>
      <Search />
      <Cards />
    </div>
  )
}

export default Grid