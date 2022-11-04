import React, { useState } from 'react'
import { SiBbciplayer } from "react-icons/si";
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import '../../assets/Font/Teko/Teko-Regular.ttf'


function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const inputEventHandler = (event) => {
        // event.preventDefault()
        const { name, value } = event.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <div className={styles.login}>
            <div className={styles.title}>
                <SiBbciplayer className={styles.icon} />
                <p>MyTube</p>
            </div>
            <div className={styles.inputContainer}>
                <input
                    type='text'
                    value={data.email}
                    name="email"
                    onChange={inputEventHandler}
                    placeholder='Enter Your Email' />
                <input
                    type='password'
                    value={data.password}
                    name="password"
                    onChange={inputEventHandler}
                    placeholder='Enter Your Password' />
            </div>
            <div className={styles.signup}>
                <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign up</span></p>
            </div>
            <div className={styles.btn}>
                <button onClick={() => navigate('/')}>Log in</button>
            </div>
        </div>
    )
}

export default Login