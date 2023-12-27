import React from 'react'
import styles from "./Grid.module.scss"

/*Components*/
import Search from './Search'

const Grid = () => {
  return (
    <div className={styles.wrapper}>
      <Search />
    </div>
  )
}

export default Grid