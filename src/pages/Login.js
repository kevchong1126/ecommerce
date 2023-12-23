import React from 'react'
import styles from "./Login.module.scss"

/*Components*/
import LoginForm from '../components/Login/LoginForm'

const Login = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <LoginForm />
        </div>
    </div>
  )
}

export default Login