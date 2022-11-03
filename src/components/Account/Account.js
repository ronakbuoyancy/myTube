import React, { useState } from 'react'
import styles from './Account.module.css'
import { MdClose, MdOutlineSwitchAccount, MdOutlineFeedback } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BsPersonSquare } from "react-icons/bs";
import { CgYoutube } from "react-icons/cg";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaUserShield } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiHelpAlt } from "react-icons/tfi";
import { SiYoutubemusic, SiYoutubegaming } from "react-icons/si";
function Account({ setAccountModal }) {
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
            <div style={{ marginTop: '25px', borderBottom: '1px solid grey' }}>
                <div className={styles.youtubeRow}>
                    <BsPersonSquare />
                    <p>your channel</p>
                </div>
                <div className={styles.youtubeRow}>
                    <MdOutlineSwitchAccount />
                    <p>switch account</p>
                </div>
            </div>
            <div style={{ marginTop: '10px', borderBottom: '1px solid grey' }}>
                <div className={styles.youtubeRow}>
                    <CgYoutube />
                    <p>Get YouTube Premium</p>
                </div>
                <div className={styles.youtubeRow}>
                    <HiOutlineCurrencyDollar />
                    <p>Purchases and memberships</p>
                </div>
                <div className={styles.youtubeRow}>
                    <FaUserShield />
                    <p>Your data in YouTube</p>
                </div>
            </div>
            <div style={{ marginTop: '10px', borderBottom: '1px solid grey' }}>
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
                    <SiYoutubemusic />
                    <p>youTube studio</p>
                </div>
                <div className={styles.youtubeRow}>
                    <SiYoutubemusic />
                    <p>youTube music</p>
                </div>
                <div className={styles.youtubeRow}>
                    <SiYoutubegaming />
                    <p>youTube kids</p>
                </div>
            </div>
        </div>
    )
}

export default Account