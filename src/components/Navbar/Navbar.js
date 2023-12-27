import React from 'react'
import styles from "./Navbar.module.scss"

import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";

import { useDispatch } from 'react-redux';
import { open } from '../../redux/openCart';

const Navbar = () => {
    const dispatch = useDispatch();

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.left}>
                <Link to="/" className={styles.title}>HYPED</Link>
            </div>
            <div className={styles.center}>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <Link to="/shop">Shop </Link>
                    </li>
                    <li className={styles.link}>
                        <Link to="/sneakers">Sneakers</Link>
                    </li>
                    <li className={styles.link}>
                        <Link to="/apparel">Apparel</Link>
                    </li>
                    <li className={styles.link}>
                        <Link to="/accessory">Accessories</Link>
                    </li>
                    <li className={styles.link}>
                        <Link to="/culture">Culture</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.right}>
                <Link to={"/login"}><CiUser className={styles.icon}/></Link>
                <div className={styles.bag} onClick={() => dispatch(open())}>
                    <IoBagHandleOutline className={styles.icon} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar