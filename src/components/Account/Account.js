import React, { useState } from 'react'
import styles from './Account.module.css'
import { MdClose, MdLogout, MdOutlineFeedback } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BsPersonSquare, BsDot } from "react-icons/bs";
import { CgYoutube } from "react-icons/cg";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaUserShield } from "react-icons/fa";
import { IoSettingsOutline, IoLogoYoutube } from "react-icons/io5";
import { TfiHelpAlt } from "react-icons/tfi";
import { SiYoutubemusic, SiYoutubegaming } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
function Account({ setAccountModal }) {
    const navigate = useNavigate()

    return (
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
                    <p>patel jigar <span><IoIosArrowDown /></span></p>
                    <p style={{ color: '#065fd4' }}>manage your google account</p>
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
            {/* <div style={{ marginTop: '10px', borderBottom: '1px solid grey' }}>
                <div className={styles.youtubeRow}>
                    <IoSettingsOutline />
                    <p>setting</p>
                </div>
            </div>
            <div style={{ marginTop: '10px', borderBottom: '1px solid grey' }}>
                <div className={styles.youtubeRow}>
                    <TfiHelpAlt />
                    <p>help</p>
                </div>
                <div className={styles.youtubeRow}>
                    <MdOutlineFeedback />
                    <p>feedback</p>
                </div>
            </div>
            <div style={{ marginTop: '10px', borderBottom: '1px solid grey' }}>
                <div className={styles.youtubeRow}>
                    <CgYoutube className={styles.youtubeRowSymbol} />
                    <p>youTube studio</p>
                </div>
                <div className={styles.youtubeRow}>
                    <SiYoutubemusic className={styles.youtubeRowSymbol} />
                    <p>youTube music</p>
                </div>
                <div className={styles.youtubeRow}>
                    <SiYoutubegaming className={styles.youtubeRowSymbol} />
                    <p>youTube kids</p>
                </div>
            </div> */}
            <div className={styles.footer}>
                <p>Privacy Policy <BsDot className={styles.oneDot} /> <span>Terms of Service</span></p>
            </div>
        </div>
    )
}

export default Account