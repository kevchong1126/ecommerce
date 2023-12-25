import React from 'react'
import styles from "./Left.module.scss"

/*Components*/
import Options from './Options'

import json from "../../json.json"

const array = [json[28], json[38], json[37], json[39]];

const Left = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.top}>
            <p>Anything else?</p>
        </div>
        <div className={styles.bottom}>
            <div className={styles.cardWrapper}>
                {
                  array.map( el => {
                    return (
                      <Options el={el} key={el.id}></Options>
                    )
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default Left