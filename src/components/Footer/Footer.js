import React, { useState } from 'react'
import styles from './Footer.module.css'
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import {
    MdOutlineSubscriptions, MdOutlineVideoLibrary, MdSubscriptions, MdLibraryAddCheck
} from "react-icons/md";
import { BsCameraReels, BsCameraReelsFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
function Footer() {
    const [activeIcon, setActiveIcon] = useState(null)
    return (
        <div className={styles.footer}>
            <NavLink to='/' className={(state) => state.isActive ? setActiveIcon('home') : null} >
                {activeIcon === 'home' ?
                    <AiFillHome className={styles.footerIcon} /> :
                    <AiOutlineHome className={styles.footerIcon} />}
            </NavLink>
            <NavLink to='/shorts'
                className={(state) => state.isActive ? setActiveIcon('shorts') : null}>
                {activeIcon === 'shorts' ?
                    <BsCameraReelsFill className={styles.footerIcon} /> :
                    <BsCameraReels className={styles.footerIcon} />}
            </NavLink>
            <NavLink to='/subscriptions' className={(state) => state.isActive ? setActiveIcon('subscriptions') : null} >
                {activeIcon === 'subscriptions' ?
                    <MdSubscriptions className={styles.footerIcon} /> :
                    <MdOutlineSubscriptions className={styles.footerIcon} />}
            </NavLink>
            <NavLink to='/library' className={(state) => state.isActive ? setActiveIcon('library') : null} >
                {activeIcon === 'library' ?
                    <MdLibraryAddCheck className={styles.footerIcon} /> :
                    <MdOutlineVideoLibrary className={styles.footerIcon} />
                }
            </NavLink>
        </div >
    )
}

export default Footer