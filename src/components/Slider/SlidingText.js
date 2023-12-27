import React from 'react'
import styles from "./SlidingText.module.scss"

const SlidingText = ({text}) => {
  return (
    <div className={styles.wrapper}>
        {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text}
    </div>
  )
}

export default SlidingText