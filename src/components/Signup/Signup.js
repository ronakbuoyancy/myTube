import React, { useState } from 'react'
import { SiBbciplayer } from "react-icons/si";
import styles from './Signup.module.css'
import { useNavigate } from 'react-router-dom';
import '../../assets/Font/Teko/Teko-Regular.ttf'


function Signup() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
        confimePassword: ''
    })
    const [checked, setChecked] = useState(false);
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
        <div className={styles.Signup}>
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
                <input
                    type='password'
                    value={data.confimePassword}
                    name="confimePassword"
                    onChange={inputEventHandler}
                    placeholder='Confime Password' />

            </div>
            <div className={styles.checkbox}>
                <input type="checkbox" defaultChecked={checked}
                    onChange={() => setChecked(!checked)}></input>
                <p> I agree to our Terms , Privacy Policy and Cookies Policy.</p>
            </div>
            <div className={styles.btn}>
                <button onClick={() => navigate('/')}>Sign up</button>
            </div>
        </div>
    )
}

export default Signup