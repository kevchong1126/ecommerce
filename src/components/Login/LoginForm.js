import React from 'react'
import styles from "./LoginForm.module.scss"

const LoginForm = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.top}>
            <h3 className={styles.title}>LOGIN</h3>
        </div>

        <div className={styles.center}>
            <input className={styles.input} placeholder="Email" type='text' />
            <input className={styles.input} placeholder="Password" type='password' />
        </div>

        <div className={styles.bottom}>
            <button className={styles.btn}>
                Sign In
            </button>
            <div className={styles.option}>
                <span className={styles.question}>Don't have an account?</span>
                <span className={styles.underline}>Sign up</span>
            </div>
            <p className={styles.underline}>
                Forgot password?
            </p>
        </div>
    </div>
  )
}

export default LoginForm