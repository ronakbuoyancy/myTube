import React, { useState } from 'react'
import styles from './Channel.module.css'
import { useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import { HiOutlineDotsVertical } from "react-icons/hi";


function Channel() {
    const location = useLocation()
    const channel = location.state.channelDetails
    const [searchModal, setSearchModal] = useState(false)
    return (
        <div>
            <Header
                channel={channel}
                searchModal={searchModal}
                setSearchModal={setSearchModal}
            />
            <div style={{ position: 'relative' }}>
                <div className={styles.coverImage}>
                    <img src={channel.coverImage} />
                </div>
                <div className={styles.channelImage}>
                    <img src={channel.channelImage} />
                </div>
            </div>
            <div>
                <p className={styles.channelName}>{channel.channelName}</p>
                <div className={styles.subscribed}>
                    <p style={{ fontWeight: 'bold' }}>Subscribed</p>
                    <p style={{ color: 'grey' }}> <span>{channel.subscribers}</span>Subscribers</p>
                </div>
            </div>
            <hr />
            <p style={{ marginLeft: '25px' }}>Uploads</p>
            <div className={styles.uploadVideos}>
                <div className={styles.uploadVideosImg}>
                    <img src={channel.thumbnail} />
                </div>
                <div className={styles.uploadVideosDetails}>
                    <h3> {`${channel.videoTitle.substring(0, 35)}...`}</h3>
                    <p>{channel.videoView}{' '}views</p>
                    <p>{channel.videoLaunch}</p>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <HiOutlineDotsVertical />
                </div>
            </div>
        </div>
    )
}

export default Channel