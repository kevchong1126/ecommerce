import React from 'react'
import styles from "./Product.module.scss"

/*Components*/
import ProductId from '../components/Product/ProductId'
import Anim from "../components/Slider/Anim"
import Blogs from '../components/Slider/Blogs'
import HeroProducts from '../components/Slider/HeroProducts'

import json from '../json';

import blog1 from "../images/blog1.webp"
import blog2 from "../images/blog2.webp"
import blog3 from "../images/blog3.webp"
import blog4 from "../images/blog4.webp"

const titles = ["Q-beams' birthplace of dreams", 
"Wanda lephoto", 
"Future thinking for new balance", 
"ambush x nike air more uptempo"];

const url = ["/culture/beam",
"/culture/wanda",
"/culture/future",
"/culture/ambush"];

const dunk = [json[5], json[8], json[14]];
const Product = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <ProductId />
            <div className={styles.space}></div>
            <Anim text={'Trending'} color={true} />
            <HeroProducts array={dunk} />
            <Anim text={'News'} color={true} />
            <Blogs images={[blog1,blog2,blog3,blog4]} url={url} titles={titles} />
        </div>
    </div>
  )
}

export default Product