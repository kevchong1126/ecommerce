import React, { useState, useEffect } from 'react'
import styles from './Right.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { add } from '../../redux/cart'
import { open } from '../../redux/openCart'

/*Components*/
import Accordion from './Accordion'

const Right = () => {
    const { database } = useSelector(state => state.databaseSlice);
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [selected, setSelected] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const find = database.find(el => el.id === id);
        setProduct(find);

        setSelected(find.sizes[0])
    }, [id, database]);

    const addHandler = () => {
        const payload = {
            title : product.title,
            price : product.price,
            image : product.image,
            id : product.id + selected,
            size: selected,
            amount : 1
        }
        
        dispatch(add(payload));

        window.setTimeout(() => {
            dispatch(open())
        }, 500);
        
        
    }
  return (
    <div className={styles.wrapper}>

        <h2 className={styles.title}>{product?.title}</h2>

        <p className={styles.price}>${product?.price}.00</p>

        <div className={styles.sizeContainer}>
            {
                product?.sizes.length ? 
                    product.sizes.map( (el, idx) =>{
                        return (
                            <div className={`${styles.optionContainer} 
                            ${selected === el ? styles.selected : ''}`} 
                            onClick={() => setSelected(el)} key={idx}>
                                <p className={styles.option}>{el}</p>
                            </div>
                        )
                    }
                            
                    )
                 : ''
            }
        </div>

        <div className={styles.btnContainer} onClick={() => addHandler()}>
            <div className={styles.btn}>
                Add to bag
            </div>
        </div>

        <p className={styles.id}>Product SKU:{product?.id}</p>

        <div className={styles.accordionContainer}>
            <Accordion />
        </div>
    </div>
  )
}

export default Right