import React, { useState } from 'react'
import styles from './Header.module.css'
import { ImYoutube } from "react-icons/im";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosSearch, IoMdMic, IoLogoYoutube } from "react-icons/io";
import { MdArrowBack } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';


function Header({ setAccountModal }) {
    const [searchModal, setSearchModal] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('Test')
    return (
        <div>
            {searchModal ?
                <div className={styles.searchModal}>
                    <MdArrowBack onClick={() => setSearchModal(false)}
                        className={styles.searchModalClose} />
                    <div className={styles.searchField}>
                        <input placeholder='Search YouTube' />
                        <IoIosSearch className={styles.searchModalsearch} />
                    </div>
                    <IoMdMic className={styles.mic} />
                </div>
                :
                <div className={location.pathname === '/videoscreen' ?
                    styles.videoScreenHeader : styles.header}>
                    <div onClick={() => navigate('/')}
                        className={location.pathname === '/videoscreen' ?
                            styles.videoScreenTitle : styles.headerTitle}>
                        <IoLogoYoutube className={styles.icon} />
                        <p>MyTube</p>
                    </div>
                    <div className={styles.headerSearch}>
                        <IoIosSearch className={location.pathname === '/videoscreen' ?
                            styles.videoScreensearchicon : styles.searchicon}
                            onClick={() => setSearchModal(true)} />
                        {location.pathname === '/videoscreen' ?
                            <HiOutlineDotsVertical style={{
                                color: 'white', fontSize: "20px"
                            }} /> :
                            <div className={styles.user} onClick={() => setAccountModal(true)}>
                                <img src={require('../../assets/Image/jigar.jpg')} />
                            </div>}
                    </div>
                </div>
            }
        </div>
    )
}

export default Header