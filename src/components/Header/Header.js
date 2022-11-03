import React, { useState } from 'react'
import styles from './Header.module.css'
import { ImYoutube } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
function Header({setAccountModal}) {
    return (
        <div className={styles.header}>
            <div className={styles.headerTitle}>
                <ImYoutube className={styles.icon} />
                <p>MyTube</p>
            </div>
            <div className={styles.headerSearch}>
                <IoIosSearch className={styles.searchicon} />
                <div className={styles.user} onClick={() => setAccountModal(true)}>
                  <img src={require('../../assets/Image/jigar.jpg')}/>
                </div>
            </div>
        </div>
    )
}

export default Header