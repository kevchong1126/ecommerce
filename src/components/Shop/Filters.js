import React, { useState } from 'react'
import styles from "./Filters.module.scss"
import { FaAngleDown, FaAngleUp  } from "react-icons/fa";

/*Components*/
import Brands from './Brands';
import Prices from './Prices';

const Filters = () => {
    const [brands, setBrands] = useState(true);
    const [prices, setPrices] = useState(true);

  return (
    <div className={styles.wrapper}>
        <div className={styles.optionContainer}>

            <div className={styles.optionsLabel} onClick={() => setBrands(prev => !prev)}>
                <p className={styles.option} > Brands </p>
                {
                    brands ?  <FaAngleUp /> : <FaAngleDown />
                }
            </div>
            
            {
                brands && <Brands />
            }
            
        </div>

        <div className={styles.optionContainer}>

            <div className={styles.optionsLabel} onClick={() => setPrices(prev => !prev)}>
                <p className={styles.option} > Prices </p>
                {
                    prices ? <FaAngleUp /> : <FaAngleDown /> 
                }
            </div>
            
            {
                prices && <Prices />
            }
            
        </div>
    </div>
  )
}

export default Filters