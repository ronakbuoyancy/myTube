import React, { useState, useRef } from 'react'
import styles from './Account.module.css'
import { MdClose, MdLogout, MdOutlineFeedback } from "react-icons/md";
import { BsPersonSquare, BsDot } from "react-icons/bs";
import { IoSettingsOutline, IoLogoYoutube } from "react-icons/io5";
import { TfiHelpAlt } from "react-icons/tfi";
import { FcCheckmark } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar';
import EditProfileModal from '../EditProfileModal/EditProfileModal';

function Account({ setAccountModal }) {
    const navigate = useNavigate()
    const [editProfileModal, setEditProfileModal] = useState(false)

    return (
        <>
            {editProfileModal ?
                <EditProfileModal
                    setEditProfileModal={setEditProfileModal} />
                :
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
                            <p style={{ color: 'rgb(28, 137, 161)' }} onClick={() => setEditProfileModal(true)}>manage your account</p>
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