import React, { useState, useRef } from 'react'
import styles from './Account.module.css'
import { MdClose, MdLogout, MdOutlineFeedback } from "react-icons/md";
import { BsPersonSquare, BsDot } from "react-icons/bs";
import { IoSettingsOutline, IoLogoYoutube } from "react-icons/io5";
import { TfiHelpAlt } from "react-icons/tfi";
import { FcCheckmark } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

function Account({ setAccountModal }) {
    const navigate = useNavigate()
    const [editProfileModal, setEditProfileModal] = useState(false)
    const [userData, setUserData] = useState({
        profile: require('../../assets/Image/profile.png'),
        email: '',
        userName: '',
        password: ''
    })
    const inputFile = useRef(null)
    const attachIconclick = () => {
        inputFile.current.click();
    }
    function handleChange(event) {
        // console.log('event', event.target.files[0]);
        // setFile(event.target.files[0])
        let reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = () => {
            setUserData((preData) => {
                return ({
                    ...preData,
                    profile: reader.result
                })
            })
        }
    }
    const inputEventHandler = (e) => {
        const { name, value } = e.target
        setUserData((preData) => {
            return ({
                ...preData,
                [name]: value
            })
        })
    }
    return (
        <>
            {editProfileModal ?
                <div className={styles.editProfileModal}>
                    <div className={styles.header}>
                        <div className={styles.editProfilTitle}>
                            <div className={styles.headFirst}>
                                <MdClose className={styles.icon}
                                    onClick={() => setEditProfileModal(false)} />
                                <p>Edit Profile</p>
                            </div>
                            <div className={styles.headSecond}>
                                <FcCheckmark className={styles.Checkicon}
                                    onClick={() => {
                                        setEditProfileModal(false)
                                        console.log(userData)
                                    }} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.profilePic}>
                        <img src={userData.profile} />
                    </div>
                    <p className={styles.profileText}
                        onClick={attachIconclick}>
                        Change profile photo</p>
                    <input type='file' id='file' ref={inputFile}
                        onChange={handleChange}
                        style={{ display: 'none' }} />
                    <div className={styles.form}>
                        <input type="text"
                            value={userData.email}
                            name='email'
                            onChange={inputEventHandler}
                            className={styles.form__input} autocomplete="off" placeholder=" " />
                        <label htmlFor="email" className={styles.form__label}>email</label>
                    </div>
                    <div className={styles.form}>
                        <input type="text"
                            value={userData.userName}
                            name='userName'
                            onChange={inputEventHandler}
                            className={styles.form__input} autocomplete="off" placeholder=" " />
                        <label htmlFor="email" className={styles.form__label}>user Name</label>
                    </div>
                    <div className={styles.form}>
                        <input type="text"
                            value={userData.password}
                            name='password'
                            onChange={inputEventHandler}
                            className={styles.form__input} autocomplete="off" placeholder=" " />
                        <label htmlFor="email" className={styles.form__label}>password</label>
                    </div>
                </div> :
                <div>
                    <div className={styles.header}>
                        <div className={styles.headerTitle}>
                            <MdClose className={styles.icon}
                                onClick={() => setAccountModal(false)} />
                            <p>Account</p>
                        </div>
                    </div>
                    <div className={styles.userDetails} >
                        <div className={styles.user}>
                            <img src={require('../../assets/Image/jigar.jpg')} />
                        </div>
                        <div className={styles.userName}>
                            <p>patel jigar</p>
                            <p style={{ color: 'rgb(28, 137, 161)'}} onClick={() => setEditProfileModal(true)}>manage your account</p>
                        </div>
                    </div>
                    <div style={{ marginTop: '40px', borderBottom: '1px solid grey' }}>
                        <div className={styles.youtubeRow}>
                            <BsPersonSquare />
                            <p>your channel</p>
                        </div>
                        <div className={styles.youtubeRow}>
                            <MdLogout />
                            <p style={{ color: 'black' }}
                                onClick={() => navigate('/login')}>log out</p>
                        </div>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <div className={styles.youtubeRow}>
                            <IoSettingsOutline />
                            <p>setting</p>
                        </div>
                        <div className={styles.youtubeRow}>
                            <TfiHelpAlt />
                            <p>help</p>
                        </div>
                        <div className={styles.youtubeRow}>
                            <MdOutlineFeedback />
                            <p>feedback</p>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <p>Privacy Policy <BsDot className={styles.oneDot} /> <span>Terms of Service</span></p>
                    </div>
                </div>}
        </>
    )
}

export default Account