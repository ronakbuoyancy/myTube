import React, { useState } from 'react'
import styles from './Channel.module.css'
import { useLocation, NavLink } from 'react-router-dom'
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
    const [categoryName, setCategoryName] = useState('home')
    const [activeCategory, setactiveCategory] = useState()
    const [filterData, setFilterData] = useState([])
    const categoryList = [
        {
            name: 'home'
        },
        {
            name: 'video'
        },
        {
            name: 'shorts'
        },
    ]
    useEffect(() => {
        setChannelData(allData.filter((item) => (item.channelName === NameofChannel)))
    }, [])
    useEffect(() => {
        filterDataHandler()
    }, [channelData,categoryName])
    const filterDataHandler = () => {
        if (categoryName) {

            if (categoryName === 'home') {
                setFilterData(channelData)
                setactiveCategory(categoryName)
            }
            else {
                const new2 = channelData.filter((item) => (item.videoType === categoryName))
                setFilterData(new2)
                setactiveCategory(categoryName)
            }
        }
        else {
            setFilterData(channelData)
        }
    }
    
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
            <div className={styles.category}>
                {categoryList.map((item, index) => (
                    <div key={index} className={styles.categoryList}>
                        <p className={item.name === activeCategory ? styles.active : styles.notActive}
                            onClick={() => {
                                // console.log(activeCategory);
                                setCategoryName(item.name)
                                // setIsNoDataFound(false)
                                // setFindCategory('')
                            }}>{item.name}</p>
                    </div>
                ))}
            </div>

            <ChannelVideo
                filterData={filterData} />
        </div>
    )
}

export default Channel