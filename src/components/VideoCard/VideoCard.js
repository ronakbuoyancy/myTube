import React from 'react'
import styles from './VideoCard.module.css'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { useNavigate, Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import { useState, useRef } from 'react';

function VideoCard({ item, index }) {
    const navigate = useNavigate()
    const [seekTime, setSeekTime] = useState(0)
    return (
        <div className={styles.videoCard} key={index}>
            <div className={styles.videoScreen}>
                <div className={styles.video}>
                    {/* <img src={item.thumbnail}
                        onClick={() =>
                            navigate('/videoscreen', { state: { selecteditem: item } })}>
                    </img> */}
                    <ReactPlayer
                        url={item.url}
                        className='ReactPlayer'
                        playing={true}
                        width="100%"
                        height="100%"
                    />
                    <span>{item.videoTime}</span>
                </div>
                <div className={styles.videoDetails}
                    onClick={() => navigate('/videoscreen', { state: { selecteditem: item } })}>
                    <div className={styles.image}>
                        <img src={item.channelImage}></img>
                    </div>
                    <div className={styles.detail}>
                        <div className={styles.title}>
                            {`${item.videoTitle.substring(0, 70)}...`}
                        </div>
                        <div className={styles.channel}>
                            {item.channelName} <span><BsDot className={styles.oneDot} /></span> {item.videoView} views <span><BsDot className={styles.oneDot} /></span> {item.videoLaunch}
                        </div>

                    </div>
                    <div className={styles.dot}>
                        <HiOutlineDotsVertical
                        // onClick={() => {
                        //   setPopupModal(!PopupModal)
                        // }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;

