import React from 'react'
import styles from "./Culture.module.scss"

/*Components*/
import Anim from '../components/Slider/Anim'
import Blogs from '../components/Slider/Blogs'

/*Images*/
import blog1 from "../images/blog1.webp"
import blog2 from "../images/blog2.webp"
import blog3 from "../images/blog3.webp"
import blog4 from "../images/blog4.webp"
import blog5 from "../images/blog5.webp"
import blog6 from "../images/blog6.webp"
import blog7 from "../images/blog7.webp"
import blog8 from "../images/blog8.webp"

const titles1 = ["Q-beams' birthplace of dreams", 
"Wanda lephoto", 
"Future thinking for new balance", 
"ambush x nike air more uptempo"];

const titles2 = ["Q-asdms' birthsadreams", 
"Wavsclephoto", 
"Future thinkdsv balance", 
"ambush x ndvsre uptempo"];

const titles3 = ["Q-bvbhplace of dreams", 
"Wanda lsjo", 
"Futugadre thinking fovxbr new balance", 
"ambush x nike air more uptecvxvcmpo"];

const url = ["/culture/kanye",
"/culture/lilpump",
"/culture/future",
"/culture/ambush"];
const Culture = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Anim text={"Culture"} color={false}/>
            <Blogs images={[blog1,blog2,blog3,blog4]} titles={titles1} url={url} />
            <Blogs images={[blog5,blog6,blog7,blog8]} titles={titles2} url={url} />
            <Blogs images={[blog4,blog8,blog5,blog1]} titles={titles3} url={url} />
        </div>
    </div>
  )
}

export default Culture