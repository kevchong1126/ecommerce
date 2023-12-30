import React, { useState } from 'react'
import styles from './Accordion.module.scss'
import { FiPlus, FiMinus } from "react-icons/fi";

import img1 from "../../images/afterpay.png"
import img2 from "../../images/paypal.png"
import img3 from "../../images/happy.avif"

const Accordion = () => {
    const [state, setState] = useState({
        state1 : false,
        state2 : false,
        state3 : false
    }) ;

    const stateHandler = (item) => {
        setState(prev => {
            const copy = {...state};
            const temp = copy[item];

            for (let el in copy){
                copy[el] = false;
            }

            copy[item] = !temp;

            return copy
        })
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles.accordion} onClick={() => stateHandler('state1')}>
            <div className={styles.label} >
                <p>Details</p>
                {
                    state.state1 ?   
                     <FiMinus className={styles.icon} /> :
                     <FiPlus className={styles.icon} />
                }
                
            </div>
            {
                state.state1 ?  
                <>
                    <p className={styles.bold}>
                        Available in-store and online. 1 Pair Per Customer only. 
                        Orders with duplicate details including contact details, 
                        shipping address and banking details will be cancelled. 
                        All release dates and mechanisms are subject to change as per Hyped
                        or the relevant brands discretion should it be needed.
                    </p>
                    <p className={styles.text}>
                        Go big. Go bold. This hoops original is all 
                        about the A-I-R, with Max Air units in the forefoot, 
                        midfoot and heel giving you unmistakable cushioning with 
                        every step. With its distinctive graffiti-inspired branding 
                        and crisp leather, the Air More Uptempo proves that sometimes 
                        more really is better.
                    </p>
                </> : ''
            }
        </div>
        <div className={styles.accordion} onClick={() => stateHandler('state2')}>
            <div className={styles.label} >
                <p>Shipping / returns</p>
                {
                    state.state2 ?   
                     <FiMinus className={styles.icon} /> :
                     <FiPlus className={styles.icon} />
                }
            </div>
            {
                state.state2 ? 
                <>
                    <p className={styles.text}>
                        SHIPPING: Hyped.com exclusively uses USPOST, 
                        one of the leading Courier Companies in US 
                        offering door to door FREE delivery on every order over $50.
                    </p>
                    <p className={styles.text}>
                        RETURNS: Please see our returns and 
                        exchanges section for more information.
                    </p>
                </> : ''
            }
        </div>
        <div className={styles.accordion} onClick={() => stateHandler('state3')}>
            <div className={styles.label} >
                <p>Buy now, pay later</p>
                {
                    state.state3 ?   
                     <FiMinus className={styles.icon} /> :
                     <FiPlus className={styles.icon} />
                }
            </div>
            {
                state.state3 ? 
                <>
                    <div className={styles.flex}>
                        <img src={img1} alt='afterpay'></img>
                        <p className={styles.desc}>
                            Pay with 4 interest-free payments of $40. Interest Free.
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <img src={img2} alt='paypal'></img>
                        <p className={styles.desc}>
                            Pay $150 over 3 payments with Paypal. Interest Free.
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <img src={img3} alt='happy'></img>
                        <p className={styles.desc}>
                            No deposit. Pay $150 over 2 months with HappyPay. Interest Free.
                        </p>
                    </div>
                </> : ''
            }
        </div>
    </div>
  )
}

export default Accordion