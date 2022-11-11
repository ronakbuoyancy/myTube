import React, { useState } from 'react'
import styles from './ChannelVideo.module.css'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useLocation, useNavigate } from 'react-router-dom';


function ChannelVideo({ channel, setVideoDetails }) {
    const [channelVideo, setChannelVideo] = useState(channel)
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className={styles.uploadVideos} onClick={() => {
            location.pathname === '/channel' ?
                navigate('/videoscreen', { state: { selecteditem: channel } }) :
                setVideoDetails(channel)
        }}>
            <div className={styles.uploadVideosImg}>
                <img src={channelVideo.thumbnail} />
            </div>
            <div className={styles.uploadVideosDetails}>
                <h3> {`${channelVideo.videoTitle.substring(0, 35)}...`}</h3>
                <p>{channelVideo.videoView}{' '}views</p>
                <p>{channelVideo.videoLaunch}</p>
            </div>
            <div style={{ marginLeft: '10px' }}>
                <HiOutlineDotsVertical />
            </div>
        </div>
    )
}

export default ChannelVideo