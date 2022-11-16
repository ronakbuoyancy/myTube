import React, { useEffect, useState, useRef } from 'react'
import Footer from '../Footer/Footer';
import styles from './Music.module.css'
import './style.scss'
import axios from 'axios';
import ProgressBar from "@ramonak/react-progress-bar";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { TbRepeat } from "react-icons/tb";
import { FaRandom } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Music() {
    const navigate = useNavigate()
    const [newReleases, setNewReleases] = useState([])
    const [playlists, setPlaylists] = useState([])
    const [categories, setCategories] = useState([])
    const [count, setCount] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const audioElem = useRef()
    // useEffect(() => {
    //     if (isPlaying) {
    //         audioElem.current.play()
    //     }
    //     else {
    //         audioElem.current.pause()
    //     }
    // }, [isPlaying])

    const clickRef = useRef();

    //     const checkWidth = (e)=>
    //   {
    //     let width = clickRef.current.clientWidth;
    //     const offset = e.nativeEvent.offsetX;

    //     const divprogress = offset / width * 100;
    //     audioElem.current.currentTime = divprogress / 100 * currentSong.length;

    //   }
    const spotify = {
        ClientId: '532915f2be8c47ea98027f16a6274844',
        ClientSecret: "69fe0ed5db1c40199b2ca98dbe6a73e7"
    }
    const [token, setToken] = useState('');

    useEffect(() => {

        axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })
            .then(tokenResponse => {
                setToken(tokenResponse.data.access_token);

                axios('https://api.spotify.com/v1/browse/new-releases', {
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + tokenResponse.data.access_token }
                })
                    .then(genreResponse => {
                        // console.log('new-releases', genreResponse.data.albums.items)
                        setNewReleases(genreResponse.data.albums.items)
                    });

                axios('https://api.spotify.com/v1/browse/featured-playlists', {
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + tokenResponse.data.access_token }
                })
                    .then(genreResponse => {
                        // console.log('playlist', genreResponse.data.playlists.items)
                        setPlaylists(genreResponse.data.playlists.items)

                    });



                axios('https://api.spotify.com/v1/browse/categories', {
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + tokenResponse.data.access_token }
                })
                    .then(genreResponse => {
                        // console.log('categories', genreResponse.data.categories.items)
                        setCategories(genreResponse.data.categories.items)
                    });

            });

    }, [spotify.ClientId, spotify.ClientSecret]);

    return (
        <div>

            <div className={styles.music}>
                <div className={styles.backIcon} onClick={() => {
                    navigate('/')
                }} >
                    <MdArrowBack />
                </div>
                <div className={styles.musicTitle}>
                    <p>{newReleases[count]?.name}</p>
                </div>
                <div style={{ height: '45%' }}>
                    <img src={newReleases[count]?.images[0].url} />
                </div>
                <div className={styles.musicDetails}>
                    <h3>{newReleases[count]?.name}</h3>
                    <p>{newReleases[count]?.artists[0].name}</p>
                </div>


                {/* 
                <audio ref={audioElem}
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    className={styles.audioPlyer}
                /> */}
                <AudioPlayer
                    // className={styles.audioPlyer}
                    className='musicPlayer'
                    // style={{ backgroundColor: '#15151500' }}
                    autoPlay={false}
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    onPlay={e => console.log("onPlay")}
                    // customVolumeControls={[]}
                    showSkipControls={true} showJumpControls={false}
                    customIcons={{
                        play: <BsFillPlayCircleFill className={styles.controlIcon} />,
                        pause: <BsFillPauseCircleFill className={styles.controlIcon} />,
                        previous: <AiFillStepBackward className={styles.controlIcon}
                            style={{ color: count === 0 ? 'grey' : 'white' }}
                            onClick={() => { if (count > 0) { setCount(count - 1) } }} />,
                        next: <AiFillStepForward className={styles.controlIcon}
                            style={{ color: count === newReleases.length - 1 ? 'grey' : 'white' }}
                            onClick={() => { if (count < newReleases.length - 1) { setCount(count + 1) } }} />,
                        loop: <TbRepeat className={styles.controlIcon} />
                    }}
                />
                {/* <div className={styles.controls}>
                    <FaRandom
                        onClick={() => setCount(Math.floor(Math.random() * 19) + 1)} />
                    <AiFillStepBackward style={{ fontSize: '30px' }}
                        onClick={() => { if (count > 0) { setCount(count - 1) } }} />
                    {!isPlaying ?
                        <BsFillPlayCircleFill style={{ fontSize: '45px' }} onClick={() => setIsPlaying(true)} /> :
                        <BsFillPauseCircleFill style={{ fontSize: '45px' }} onClick={() => setIsPlaying(false)} />}

                    <AiFillStepForward style={{ fontSize: '30px' }}
                        onClick={() => { if (count < newReleases.length - 1) { setCount(count + 1) } }} />
                    <TbRepeat />
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Music