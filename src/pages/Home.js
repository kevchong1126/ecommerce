import React from 'react'
import styles from "./Home.module.scss"

/*Components*/
import Hero from '../components/Hero/Hero'
import Category from '../components/Category/Category'
import Anim from "../components/Slider/Anim"
import Blogs from '../components/Slider/Blogs'

/*Images*/
import hero from "../images/hero.webp"
import cat1 from "../images/category1.webp"
import cat2 from "../images/category2.webp"
import cat3 from "../images/category3.webp"
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

const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Hero image={hero} alt="Jordan"/>
            <Category img1={cat1} img2={cat2} img3={cat3} url1="/shop/loafer" url2="/shop/glass" url3="/shop/shirt" />
            <Anim text={"culture"} color={true}/>
            <Blogs images={[blog1, blog2, blog3, blog4]} url={url} titles={titles}/>
        </div>
    </div>
  )
}

export default Home