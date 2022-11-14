import React from 'react'
import ReactPlayer from "react-player";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Subscriptions.module.css'

function Subscriptions() {
    return (
        <div>
            <Header />
            <div className={styles.subscriptions}>
                <img src={require('../../assets/Image/comingsoon.png')} />
            </div>
            <Footer />
        </div>
    )
}

export default Subscriptions