import React, { useState } from 'react'
import styles from './Channel.module.css'
import { useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import ChannelVideo from '../ChannelVideo/ChannelVideo';
import { useEffect } from 'react';
import allData from '../AllData/AllData';

function Channel() {
    const location = useLocation()
    const channel = location.state.channelDetails
    const NameofChannel = channel.channelName
    const [searchModal, setSearchModal] = useState(false)
    const [channelData, setChannelData] = useState([])
    useEffect(() => {
        setChannelData(allData.filter((item) => (item.channelName === NameofChannel)))
    }, [])
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
            <ChannelVideo
                channelData={channelData} />
        </div>
    )
}

export default Channel