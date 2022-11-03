import React from 'react'
import styles from './PopupModal.module.css'
import { FaRegWindowClose } from "react-icons/fa";
function PopupModal({ setVideoModal, popupData }) {

    return (
        <div className={styles.videoModal}>
            <div className={styles.closeVideoModal}>
                <FaRegWindowClose className={styles.closeVideoModalSymbol}
                    onClick={() => setVideoModal(false)} /></div>
            {popupData.map((item,index) => (
                <div className={styles.videoModalRow} key={index}>
                    <item.icon className={styles.videoModalSymbol} />
                    <p className={styles.videoModalText}>{item.value}</p>
                </div>
            ))}
            {/* <div className={styles.closeVideoModal}>
                <FaRegWindowClose className={styles.closeVideoModalSymbol}
                    onClick={() => setVideoModal(false)} /></div>
            <div className={styles.videoModalRow}>
                <MdNotInterested className={styles.videoModalSymbol} />
                <p className={styles.videoModalText}>Not interested</p>
            </div>
            <div className={styles.videoModalRow}>
                <MdClose
                    className={styles.videoModalSymbol} />
                <p className={styles.videoModalText}>Don't recommend chamnel</p>
            </div>
            <div className={styles.videoModalRow}>
                <BsClock
                    className={styles.videoModalSymbol} />
                <p className={styles.videoModalText}>Save to Watch later</p>
            </div> */}
        </div>
    )
}

export default PopupModal