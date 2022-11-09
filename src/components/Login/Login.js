import React, { useState } from 'react'
import { SiBbciplayer } from "react-icons/si";
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import '../../assets/Font/Teko/Teko-Regular.ttf'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    const submitHandler = () => {
        if (data.email !== '' && data.password !== '') {
            toast.success('Edit Profile Successfully Done', {
                position: "top-center",
                toastId: 'Success1',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                navigate('/')
            }, 2000);
        }
        else {
            toast.error('Please enter a valid data', {
                position: "top-center",
                toastId: 'error1',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <div className={styles.login}>
            <div className={styles.title}>
                <SiBbciplayer className={styles.icon} />
                <p>MyTube</p>
            </div>
            <div className={styles.inputContainer}>
                <div className={styles.form}>
                    <input
                        type='text'
                        value={data.email}
                        name="email"
                        onChange={inputEventHandler}
                        className={styles.form__input} autocomplete="off"
                        placeholder=" " />
                    <label className={styles.form__label}>email</label>
                </div>
                <div className={styles.form}>
                    <input
                        type='password'
                        value={data.password}
                        name="password"
                        onChange={inputEventHandler}
                        className={styles.form__input} autocomplete="off"
                        placeholder=" " />
                    <label className={styles.form__label}>password</label>
                </div>
            </div>
            <div className={styles.signup}>
                <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign up</span></p>
            </div>
            <div className={styles.btn}>
                <button onClick={() => submitHandler()}>Log in</button>
            </div>
            <ToastContainer transition={Zoom}
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Login