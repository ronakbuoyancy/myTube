import React, { useRef, useState } from 'react'
import Category from '../Category/Category'
import Header from '../Header/Header'
import styles from './VideoScreen.module.css'
import { useLocation } from 'react-router-dom';
import { BsDot } from "react-icons/bs";
import PopupModal from '../PopupModal/PopupModal';
import { MdNotInterested, MdClose } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import ReactPlayer from "react-player";

function VideoScreen() {
    const location = useLocation()
    const videoDetails = location.state.selecteditem
    const videoRef = useRef()
    // const [PopupModal, setPopupModal] = useState(false)

    const popupData = [
        {
            value: 'Not interested',
            icon: MdNotInterested
        },
        {
            value: "Don't recommend chamnel",
            icon: MdClose
        },
        {
            value: 'Save to Watch later',
            icon: BsClock
        },
    ]
    console.log(videoDetails);
    return (
        <div>
            <Header
            // setPopupModal={setPopupModal}
            />
            {/* <Category /> */}

            <div className={styles.video}>
                {/* <img src={videoDetails.video} /> */}
                <video width="100%" height="100%" controls >
                    <source src={videoDetails.url} type="video/mp4" />
                </video>
                {/* <ReactPlayer
                    ref={videoRef}
                    url='https://m.youtube.com/watch?v=c569nyDmug8'
                    width="100%"
                    height="100%"
                    playing={true}
                    loop={true}
                    className={styles.videoCardImg}
                /> */}
            </div>
            <div className={styles.title}>
                {`${videoDetails.videoTitle.substring(0, 70)}...`}

            </div>
            <div className={styles.channel}>
                {videoDetails.videoView} views
                <span><BsDot className={styles.oneDot} /></span>
                {videoDetails.videoLaunch}
                <span>...more</span>
            </div>
            <div className={styles.videoDetails}>
                <div className={styles.videoDetailsChannel}>
                    <div className={styles.image}>
                        <img src={videoDetails.channelImage}></img>
                    </div>
                    <p>{videoDetails.channelName}</p>
                    <p>1.16M</p>
                </div>
                <div>
                    <p className={styles.subscribe}>subscribe</p>
                </div>

            </div>
            {/* {PopupModal && <PopupModal
                popupData={popupData}
            />} */}

        </div>
    )
}

export default VideoScreen