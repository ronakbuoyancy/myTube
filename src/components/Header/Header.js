import React, { useState } from 'react'
import styles from './Header.module.css'
import { SiBbciplayer } from "react-icons/si";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosSearch, IoMdMic } from "react-icons/io";
import { MdArrowBack } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';
import '../../assets/Font/Teko/Teko-Regular.ttf'


function Header({ setAccountModal, channel, setFindCategory, handleKeyDown,searchModal,setSearchModal }) {
    // const [findCategory, setFindCategory] = useState()
    const location = useLocation()
    const navigate = useNavigate()
    const inputEvent = (e) => {
        setFindCategory(e.target.value)
        // console.log(e.target.value);
    }

    return (
        <div>
            {searchModal ?
                <div className={styles.searchModal}>
                    <MdArrowBack onClick={() => setSearchModal(false)}
                        className={styles.searchModalClose} />
                    <div className={styles.searchField}>
                        <input onChange={inputEvent}
                            onKeyDown={handleKeyDown}
                            placeholder='Search YouTube' />
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
                        <SiBbciplayer className={styles.icon} />
                        {location.pathname === '/channel' ?
                            <p style={{ fontFamily: 'Roboto', fontSize: '15px', marginLeft: "10px" }}>{channel.channelName}</p> :
                            <p>MyTube</p>}
                    </div>
                    <div className={styles.headerSearch}>
                        <IoIosSearch className={location.pathname === '/videoscreen' ?
                            styles.videoScreensearchicon : styles.searchicon}
                            onClick={() => setSearchModal(true)} />
                        {location.pathname === '/' ?
                            <div className={styles.user} onClick={() => setAccountModal(true)}>
                                <img src={require('../../assets/Image/jigar.jpg')} />
                            </div> : <HiOutlineDotsVertical
                                style={{ color: location.pathname === '/videoscreen' ? 'white' : 'black', fontSize: "20px" }} />
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Header