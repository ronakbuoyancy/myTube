import React, { useState } from 'react'
import styles from './ChannelVideo.module.css'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useLocation, useNavigate } from 'react-router-dom';

function ChannelVideo({ setVideoDetails, filterData }) {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div>
            {
                filterData?.map((item, index) => (
                    <div className={styles.uploadVideos} key={index}
                        onClick={() => {
                            location.pathname === '/channel' ?
                                navigate('/videoscreen', { state: { selecteditem: item } }) :
                                setVideoDetails(item)
                        }}
                    >
                        <div className={styles.uploadVideosImg}>
                            <img src={item.thumbnail} />
                        </div>
                        <div className={styles.uploadVideosDetails}>
                            <h3> {`${item.videoTitle.substring(0, 35)}...`}</h3>
                            <p>{item.videoView}{' '}views</p>
                            <p>{item.videoLaunch}</p>
                        </div>
                        {/* <div style={{ marginLeft: '10px', marginTop: "10px" }}>
                            <HiOutlineDotsVertical />
                        </div> */}
                    </div>
                ))
            }
        </div>
    )
}

export default ChannelVideo