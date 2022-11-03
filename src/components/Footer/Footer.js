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
            <div className={styles.footerItem}>
                <NavLink to='/' className={(state) => state.isActive ? setActiveIcon('home') : null} >
                    {activeIcon === 'home' ?
                        <AiFillHome className={styles.footerIcon} /> :
                        <AiOutlineHome className={styles.footerIcon} />}
                    <p>home</p>
                </NavLink>
            </div>
            <div className={styles.footerItem}>
                <NavLink to='/shorts'
                    className={(state) => state.isActive ? setActiveIcon('shorts') : null}>
                    {activeIcon === 'shorts' ?
                        <BsCameraReelsFill className={styles.footerIcon} /> :
                        <BsCameraReels className={styles.footerIcon} />}
                    <p>shorts</p></NavLink>
            </div>
            <div className={styles.footerItem}>
                <NavLink to='/subscriptions' className={(state) => state.isActive ? setActiveIcon('subscriptions') : null} >
                    {activeIcon === 'subscriptions' ?
                        <MdSubscriptions className={styles.footerIcon} /> :
                        <MdOutlineSubscriptions className={styles.footerIcon} />}
                    <p>subscriptions</p></NavLink>
            </div>
            <div className={styles.footerItem}>
                <NavLink to='/library' className={(state) => state.isActive ? setActiveIcon('library') : null} >
                    {activeIcon === 'library' ?
                        <MdLibraryAddCheck className={styles.footerIcon} /> :
                        <MdOutlineVideoLibrary className={styles.footerIcon} />
                    }
                    <p>library</p></NavLink>
            </div>
        </div >
    )
}

export default Footer