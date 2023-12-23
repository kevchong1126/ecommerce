import React from 'react'
import styles from "./Wanda.module.scss"
import { useParams } from 'react-router-dom'
/*Components*/
import Anim from '../components/Slider/Anim'
import Blogs from '../components/Slider/Blogs'
import Dates from "../components/Culture/Dates"

/*Images*/
import blog1 from "../images/blog1.webp"
import blog2 from "../images/blog5.webp"
import blog3 from "../images/blog2.webp"
import blog4 from "../images/blog7.webp"

const titles = [
"Q-beams' birthplace of dreams", 
"Wanda lephoto", 
"Future thinking for new balance", 
"ambush x nike air more uptempo"
];

const url = ["/culture/beam",
"/culture/wanda",
"/culture/future",
"/culture/ambush"];

const Wanda = () => {
  const {blog} = useParams();

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Anim text={blog} color={false} />
            <Anim text={"News"} color={false} />
            <Dates category={"Sneakers"} date={"09.17.23"} author={"Callhum Mathews"} time={"5min"} />
            <p className={styles.bold}>
            This focus on newly proposed representations has seen the label showcase in 
            Milan a number of times with the WHITE Show Milano, 
            while also making its mark in the vibrant fashion 
            landscape of Paris this year. Wanda Lephoto's presence is not confined to the runways; 
            it extends to groundbreaking collaborations that transcend conventional boundaries.
            </p>
            <p className={styles.text}>
            One such notable collaboration is with Thebe Magugu for Project 16.1.C, 
            where Wanda contributed his distinct design sensibilities to create a 
            fusion of styles that garnered attention and acclaim. 
            Furthermore, Wanda made history by spearheading the launch of the world’s 
            first recycled NFT in collaboration with Savanna and Metalabs, 
            showcasing his commitment to sustainable practices and cutting-edge 
            innovation within the fashion-tech space.
            </p>
            <p className={styles.text}>
            A pivotal moment in Wanda Lephoto's career is the historic partnership with Dakotas, 
            wherein he reinterpreted the classic heritage of the loafer, 
            transforming it into the cleanest, high-shine slip-on mule. This project not 
            only showcased Wanda's mastery in merging tradition with modern aesthetics but also
             highlighted his ability to infuse cultural richness into contemporary design.
            </p>
            <p className={styles.bold}>
            In essence, Wanda Lephoto's innovative collaborations, groundbreaking projects, 
            and dedication to sustainable practices are not merely contributing to the evolution of fashion
            </p>
            <p className={styles.text}>
            Beyond the aesthetic realm, Wanda Lephoto's impact is profound in reshaping 
            the possibilities and potentials for local design in Europe. His ability 
            to identify and analyze the sweep of sartorial history in the country defines him 
            as not just a designer but a thoughtful curator of cultural narratives.{blog} work
             reflects a deep understanding of the evolving dynamics of South African fashion, 
             positioning him as a trailblazer who not only follows trends but also shapes them.
            </p>
            <p className={styles.text}>
            As a designer and thinker for the ages, Wanda continues to push the boundaries, 
            leaving an indelible mark on the global fashion stage while proudly representing 
            the rich tapestry of South African creativity.
            </p>
            <p className={styles.bold}>
            Known for his keen eye for detail and a deep appreciation for the arts, 
            {blog} has seamlessly integrated his design prowess with broader cultural narratives.
            </p>
            <p className={styles.text}>
            Lephoto has collaborated with filmmakers, musicians, and visual artists to create 
            immersive experiences that transcend traditional boundaries. His work often serves as 
            a bridge between various art forms, fostering a dialogue between fashion and other
             creative disciplines. This collaborative approach not only enriches the cultural 
             landscape but also showcases the interconnectedness of different forms of artistic expression.
            </p>
            <p className={styles.bold}>
            I{blog} commitment to storytelling is evident in his involvement with community-driven projects.
            </p>
            <p className={styles.text}>
            Beyond the aesthetic realm, Wanda Lephoto's impact is profound in reshaping 
            the possibilities and potentials for local design in Europe. His ability 
            to identify and analyze the sweep of sartorial history in the country defines him 
            as not just a designer but a thoughtful curator of cultural narratives.{blog} work
             reflects a deep understanding of the evolving dynamics of South African fashion, 
             positioning him as a trailblazer who not only follows trends but also shapes them.
            </p>
            <p className={styles.text}>
            As a designer and thinker for the ages, Wanda continues to push the boundaries, 
            leaving an indelible mark on the global fashion stage while proudly representing 
            the rich tapestry of South African creativity.
            </p>
            <div className={styles.space}>
              <Anim text={"More..."} color={false} />
              <Blogs images={[blog1,blog2,blog3,blog4] }titles={titles} url={url} />
            </div>
            
        </div>
    </div>
  )
}

export default Wanda