import React, { useState } from 'react'
import styles from "./Search.module.scss"
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setSort } from '../../redux/database';

const ht = {
    1: "Alphabetically, A to Z",
    2: "Alphabetically, Z to A",
    3: "Price, low to high",
    4: "Price, high to low"
}

const Search = () => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(ht[1]);
    const {query, length} = useSelector( state => state.databaseSlice);
    const dispatch = useDispatch();

    const sortHandler = (index) => {
        setSelected(ht[index]);
        dispatch(setSort(index));
        setShow(false);
    };
    
    const queryHandler = text => {
        dispatch(setQuery(text))
    };

  return (
    <div className={styles.wrapper}>
        <div className={styles.searchContainer}>
            <CiSearch className={styles.icon}/>
            <input className={styles.input} value={query} onChange={e => queryHandler(e.target.value)} placeholder='Search by name'>
            </input>
        </div>
        <div className={styles.descriptions}>
            <p>{length} products</p>

            <div className={styles.sortContainer}>
                <div className={styles.sortLabel} onClick={() => setShow(prev => !prev)}>
                    <p className={styles.sortLabel}>{selected}</p>
                    <FaAngleDown className={styles.icon} />
                </div>
                
                {
                    show && 
                    <ul className={styles.list}>
                        <li className={styles.item} onClick={() => sortHandler(1)}>Alphabetically, A to Z</li>
                        <li className={styles.item} onClick={() => sortHandler(2)}>Alphabetically, Z to A</li>
                        <li className={styles.item} onClick={() => sortHandler(3)}>Price, low to high</li>
                        <li className={styles.item} onClick={() => sortHandler(4)}>Price, high to low</li>
                    </ul>
                }
            </div>
        </div>
    </div>
  )
}

export default Search