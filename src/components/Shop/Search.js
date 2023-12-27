import React, { useState } from 'react'
import styles from "./Search.module.scss"
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from 'react-icons/fa';
const Search = () => {
    const [show, setShow] = useState(false);

  return (
    <div className={styles.wrapper}>
        <div className={styles.searchContainer}>
            <CiSearch className={styles.icon}/>
            <input className={styles.input} placeholder='Search products'>
            </input>
        </div>
        <div className={styles.descriptions}>
            <p>240 products</p>
            <div className={styles.sortContainer}>
                <div className={styles.sortLabel}>
                    <p className={styles.sortLabel}>Price, low to high</p>
                    <FaAngleDown />
                </div>
                
                {
                    show && 
                    <ul className={styles.list}>
                        <li className={styles.item}>Alphabetically, A to Z</li>
                        <li className={styles.item}>Alphabetically, Z to A</li>
                        <li className={styles.item}>Price, low to high</li>
                        <li className={styles.item}>Price, high to low</li>
                    </ul>
                }
            </div>
        </div>
    </div>
  )
}

export default Search