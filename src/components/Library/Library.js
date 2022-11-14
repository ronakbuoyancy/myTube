import React from 'react'
import ReactPlayer from "react-player";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Library.module.css'

function Library() {
    return (
        <div>
            <Header />
            <div className={styles.library}>
                <img src={require('../../assets/Image/comingsoon.png')} />
            </div>
            <Footer />
        </div>
    )
}

export default Library