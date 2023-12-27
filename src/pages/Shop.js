import React, { useState, useEffect} from 'react'
import styles from "./Shop.module.scss"
import { useLocation, useParams } from 'react-router-dom'

/*Components*/
import Filters from '../components/Shop/Filters'
import Grid from '../components/Shop/Grid'

import json from "../json.json"

const Shop = () => {
    const location = useLocation();
    const {query} = useParams();
    const products = useState([]);

    useEffect(() => {
        
    }, [query]);

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>
                    "{
                        query ? query : "Start searching"
                    }"
                </h2>
                
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    <Filters />
                </div>  
                <div className={styles.right}>
                    <Grid />
                </div>  
            </div>
            
        </div>
    </div>
  )
}

export default Shop