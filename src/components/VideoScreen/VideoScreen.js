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
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike } from "react-icons/ai";
import ReactPlayer from "react-player";
import { useNavigate } from 'react-router-dom';


function VideoScreen() {
    const location = useLocation()
    const navigate = useNavigate()
    const videoDetails = location.state.selecteditem
    const [isLike, setIsLike] = useState(false)
    const [isDisLike, setIsDisLike] = useState(false)

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
    // console.log(videoDetails);
    return (
        <div>
            <Header
            // setPopupModal={setPopupModal}
            />
            {/* <Category /> */}

            <div className={styles.video}>
                {/* <img src={videoDetails.thumbnail} /> */}
                <div className={styles.playerWrapper}>

                    <ReactPlayer
                        url={videoDetails.url}
                        className='ReactPlayer'
                        playing={true}
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                </div>
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
                <div className={styles.videoDetailsChannel}
                    onClick={() => {
                        navigate('/channel', { state: { channelDetails: videoDetails } })
                    }}
                // navigate('/videoscreen', { state: { selecteditem: item } })
                >
                    <div className={styles.image}>
                        <img src={videoDetails.channelImage}></img>
                    </div>
                    <p>{videoDetails.channelName}</p>
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

        </div>
    )
}

export default VideoScreen