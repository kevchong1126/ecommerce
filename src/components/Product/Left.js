import React, { useEffect, useState } from 'react'
import styles from "./Left.module.scss"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Left = () => {
    const { database } = useSelector(state => state.databaseSlice);
    const { id } = useParams();
    const [product, setProduct] = useState();
    
    useEffect(() => {
        const find = database.find(el => el.id === id);

        setProduct(find)
    }, [id, database]);

  return (
    <div className={styles.wrapper}>
        <img src={'/' + product?.image} alt={product?.title}></img>
    </div>
  )
}

export default Left