import React, {useEffect} from 'react'
import styles from "./Home.module.scss"

/*Components*/
import Hero from '../components/Hero/Hero'
import Category from '../components/Category/Category'
import Anim from "../components/Slider/Anim"
import Blogs from '../components/Slider/Blogs'
import HeroProducts from '../components/Slider/HeroProducts'

/*Images*/
import hero from "../images/hero.webp"
import cat1 from "../images/category1.webp"
import cat2 from "../images/category2.webp"
import cat3 from "../images/category3.webp"
import blog1 from "../images/blog1.webp"
import blog2 from "../images/blog2.webp"
import blog3 from "../images/blog3.webp"
import blog4 from "../images/blog4.webp"

import json from "../json.json"

const titles = ["Q-beams' birthplace of dreams", 
"Wanda lephoto", 
"Future thinking for new balance", 
"ambush x nike air more uptempo"];

const url = ["/culture/beam",
"/culture/wanda",
"/culture/future",
"/culture/ambush"];

const dunk = [json[0], json[1], json[2]];
const retro = [json[3], json[4], json[7]];
const running = [json[11], json[12], json[13]];
const shirts  = [json[25], json[26], json[27]];
const glasses  = [json[30], json[31], json[32]];

const Home = () => {

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Hero image={hero} alt="Jordan" id={json[1].id}/>
            <Category img1={cat1} img2={cat2} img3={cat3} url1="/shop/birkenstock" url2="/shop/ray-ban" url3="/shop/shirt" />
            <Anim text={"Dunk"} color={false}/>
            <HeroProducts array={dunk} />
            <Anim text={"Retro's"} color={false}/>
            <HeroProducts array={retro} />
            <Anim text={"Ray-ban"} color={false}/>
            <HeroProducts array={glasses} />
            <Anim text={"Running"} color={false}/>
            <HeroProducts array={running} />
            <Anim text={"Shirts"} color={false}/>
            <HeroProducts array={shirts} />
            <Anim text={"culture"} color={true}/>
            <Blogs images={[blog1, blog2, blog3, blog4]} url={url} titles={titles}/>
        </div>
    </div>
  )
}

export default Home