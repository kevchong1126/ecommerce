import React, { useEffect, useState } from 'react'
import styles from "./Cards.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { setLength } from '../../redux/database'

/*Components*/
import Card from './Card'

const Cards = () => {
    const [cards, setCards] = useState([]);
    const {database, prices, filters, sort, query} = useSelector( state => state.databaseSlice);
    const dispatch = useDispatch();

    useEffect(() => {

      const match = database
      .filter( el => {
        return el.title.toLowerCase().includes(query.toLowerCase())
      })
      .filter( el => {
        if (filters['bk'] || filters['nike'] || filters['nb'] || filters['nf'] || filters['jordan']){
          if (filters['bk'] && el.brand == "birkenstock") return true
          if (filters['nike'] && el.brand == "nike") return true
          if (filters['nb'] && el.brand == "new balance") return true
          if (filters['nf'] && el.brand == "north face") return true
          if (filters['jordan'] && el.brand == "jordan") return true
        }else return true
        
      }).filter( el => {
        if (prices[1] || prices[2] || prices[3] || prices[4]){
          if (prices[1] && +el.price >= 0 && +el.price <= 100) return true
          if (prices[2] && +el.price >= 101 && +el.price <= 200) return true
          if (prices[3] && +el.price >= 201 && +el.price <= 300) return true
          if (prices[4] && +el.price >= 301) return true
        }else return true
      }).sort( (a,b) => {
        if (sort[1]){
          if (a.title > b.title) return 1
          if (a.title < b.title) return -1
        } 
        if (sort[2]){
          if (a.title < b.title) return 1
          if (a.title > b.title) return -1
        } 
        if (sort[3]) return +a.price - +b.price
        if (sort[4]) return +b.price - +a.price
      })
      
      dispatch(setLength(match.length)); 
      setCards(match)

    }, [query, 
      filters['bk'], filters['nike'], filters['nb'], 
      filters['nf'], filters['jordan'],prices[1],
      prices[2], prices[3], prices[4], sort[1],
      sort[2], sort[3], sort[4]
    ]);


  return (
    <div className={styles.wrapper}>
        {
            cards?.length ? cards.map( (el,idx) => {
                return <Card el={el} key={idx}/>
            }) : ""
        }
    </div>
  )
}


export default Cards