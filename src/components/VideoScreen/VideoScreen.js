import React, { useRef, useState, useEffect } from 'react'
import Category from '../Category/Category'
import Header from '../Header/Header'
import styles from './VideoScreen.module.css'
import { useLocation } from 'react-router-dom';
import { BsDot, BsClock } from "react-icons/bs";
import PopupModal from '../PopupModal/PopupModal';
import { MdNotInterested, MdClose } from "react-icons/md";
import { RiShareForwardLine, RiFlagLine } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import { SlReload } from "react-icons/sl";
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike } from "react-icons/ai";
import ReactPlayer from "react-player";
import { useNavigate } from 'react-router-dom';
import allData from '../AllData/AllData';
import ChannelVideo from '../ChannelVideo/ChannelVideo'
function VideoScreen() {
    const location = useLocation()
    const navigate = useNavigate()
    // const videoDetails = location.state.selecteditem
    const [videoDetails, setVideoDetails] = useState(location.state.selecteditem)
    const [isLike, setIsLike] = useState(false)
    const [isDisLike, setIsDisLike] = useState(false)
    const [searchModal, setSearchModal] = useState(false)
    const [showReloadIcon, setshowReloadIcon] = useState(false)
    const [reloadVideo, setReloadVideo] = useState(false)
    const [isVideoEnd, setIsVideoEnd] = useState(false)
    const [nextVideo, setNextVideo] = useState()
    const [count, setCount] = useState(10)
    const [channelData, setChannelData] = useState()
    // const videoRef = useRef()
    // const [PopupModal, setPopupModal] = useState(false)
    // let randomNumber = Math.floor(Math.random() * 7) + 1
    // let randomNumber = (Math.floor((Math.random() * 10)) > 7) ? Math.floor((Math.random() * 10) - 3) : Math.floor((Math.random() * 10))
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

    function generateRandom(min = 1, max = 7) {

        let difference = max - min;
        let rand = Math.random();
        rand = Math.floor(rand * difference);
        rand = rand + min;
        if (rand !== videoDetails?.id || rand !== nextVideo?.id) {
            return rand;
        }
        else {
            let difference = max - min;
            let rand = Math.random();
            rand = Math.floor(rand * difference);
            rand = rand + min;
            return rand
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (isVideoEnd) {
                if (count > 0) {
                    setCount(count - 1);
                }
            }
        }, 1000);
        if (count === 0) {
            // setIsnextVideo(true)
            setIsVideoEnd(false)
            setReloadVideo(true)
            setshowReloadIcon(false)
            setVideoDetails(nextVideo)
        }
        return () => clearInterval(interval)
    }, [count, isVideoEnd]);
    useEffect(() => {
        setChannelData(allData.filter((item) => (item.channelName !== videoDetails.channelName)))
    }, [])

    // const handleKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         navigate('/')
    //     }
    // }

    return (
        <div>
            <Header
                searchModal={searchModal}
                setSearchModal={setSearchModal}
            // handleKeyDown={handleKeyDown}
            // setPopupModal={setPopupModal}
            />
            {/* <Category /> */}

            <div className={styles.video}>
                {/* <img src={videoDetails.thumbnail} /> */}
                {showReloadIcon && <div className={styles.reloadIconDiv}>
                    <SlReload className={styles.reloadIcon}
                        onClick={() => {
                            setshowReloadIcon(false)
                            setReloadVideo(true)
                        }} />
                </div>}
                <div className={styles.playerWrapper}>
                    <ReactPlayer
                        url={videoDetails.url}
                        className={styles.ReactPlayer}
                        playing={reloadVideo && true}
                        width="100%"
                        height="100%"
                        controls={true}
                        onEnded={() => {
                            setshowReloadIcon(true)
                            setIsVideoEnd(true)
                            setNextVideo(allData[generateRandom()])
                        }}
                        onPlay={() => {
                            setReloadVideo(false)
                            setCount(10)
                        }}
                        loop={reloadVideo && true}
                    // onDuration={(duration) => console.log(duration)}
                    />
                </div>
                {isVideoEnd &&
                    <div className={styles.nextVideoContainer}>
                        <p className={styles.nextCount}>Up next in {count}</p>
                        <div className={styles.uploadVideos}>
                            <div className={styles.uploadVideosImg}>
                                <img src={nextVideo.thumbnail} />
                            </div>
                            <div className={styles.uploadVideosDetails}>
                                <h3> {`${nextVideo.videoTitle.substring(0, 35)}...`}</h3>
                                <p>{nextVideo.channelName}</p>
                            </div>
                        </div>
                        <div className={styles.nextVideoBtn}>
                            <p onClick={() => {
                                setIsVideoEnd(false)
                                setReloadVideo(false)
                            }}>cancel</p>
                            <p onClick={() => {
                                setIsVideoEnd(false)
                                setshowReloadIcon(false)
                                setVideoDetails(nextVideo)
                                // setVideoDetails(allData[randomNumber])
                            }}>play now</p>
                        </div>
                        {/* {isnextVideo &&
                            <div className={styles.nextVideoplayerWrapper}>
                                <ReactPlayer
                                    url={nextVideoDetails.url}
                                    className={styles.nextVideoReactPlayer}
                                    playing={true}
                                    width="100%"
                                    height="100%"
                                    controls={true}
                                // onEnded={() => {
                                //     setshowReloadIcon(true)
                                // }}
                                // onPlay={() => { setReloadVideo(false) }}
                                // loop={reloadVideo && true}
                                // onDuration={(duration) => console.log(duration)}
                                />
                            </div>
                        } */}
                    </div>
                }
            </div>
            <div className={styles.title}>
                {videoDetails.videoTitle.length <= 69 ? videoDetails.videoTitle :
                    `${videoDetails.videoTitle.substring(0, 70)}...`}
            </div>
            <div className={styles.channel}>
                {videoDetails.videoView} views
                <span><BsDot className={styles.oneDot} /></span>
                {videoDetails.videoLaunch}
                <span>...more</span>
            </div>
            <div className={styles.videoDetails}>
                <div className={styles.videoDetailsChannel}
                    onClick={() => {
                        navigate('/channel', { state: { channelDetails: videoDetails } })
                    }}
                // navigate('/videoscreen', { state: { selecteditem: item } })
                >
                    <div className={styles.image}>
                        <img src={videoDetails.channelImage}></img>
                    </div>
                    <p>
                        {videoDetails.channelName.length <= 19 ? videoDetails.channelName :
                            `${videoDetails.channelName.substring(0, 20)}...`}
                    </p>
                    <p>{videoDetails.subscribers}</p>
                </div>
                <div>
                    <p className={styles.subscribe}>subscribe</p>
                </div>

            </div>
            <div className={styles.LikeContainer}>
                <div className={styles.Like_share}>
                    {isLike ?
                        <AiFillLike onClick={() => {
                            setIsLike(!isLike)
                            setIsDisLike(false)
                        }} /> :
                        <AiOutlineLike onClick={() => {
                            setIsLike(!isLike)
                            setIsDisLike(false)
                        }} />
                    }

                    <p style={{ borderRight: '1px solid grey', height: '26px', paddingTop: '10px', paddingRight: '15px' }}>48K</p>
                    {isDisLike ?
                        <AiFillDislike onClick={() => {
                            setIsDisLike(!isDisLike)
                            setIsLike(false)
                        }} /> :
                        <AiOutlineDislike onClick={() => {
                            setIsDisLike(!isDisLike)
                            setIsLike(false)
                        }} />
                    }
                </div>
                <div className={styles.Like_share}>
                    <RiShareForwardLine />
                    <p>share</p>
                </div>
                <div className={styles.Like_share}>
                    <FiPlusSquare />
                    <p>save</p>
                </div>
                <div className={styles.Like_share}>
                    <RiFlagLine />
                    <p>report</p>
                </div>
            </div>
            {/* {PopupModal && <PopupModal
                popupData={popupData}
            />} */}
            <hr style={{ marginTop: '25px' }} />
            <h3 style={{ marginLeft: '25px' }} >Popular videos</h3>
            <div style={{ marginTop: '10px' }}>

                <ChannelVideo
                    channelData={channelData}
                    setVideoDetails={setVideoDetails} />
            </div>
        </div>
    )
}

export default VideoScreen