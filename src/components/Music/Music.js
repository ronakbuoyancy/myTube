import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import styles from './Music.module.css'
import axios from 'axios';
import ProgressBar from "@ramonak/react-progress-bar";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { TbRepeat } from "react-icons/tb";
import { FaRandom } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


function Music() {
    const navigate = useNavigate()
    const [newReleases, setNewReleases] = useState([])
    const [playlists, setPlaylists] = useState([])
    const [categories, setCategories] = useState([])
    const [count, setCount] = useState(0)
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
                <div style={{height:'10%'}}>
                <p>{newReleases[count]?.name}</p>
                </div>
                <div style={{height:'55%'}}>
                <img src={newReleases[count]?.images[0].url} />
                </div>
                <div className={styles.musicDetails}>
                    <h3>{newReleases[count]?.name}</h3>
                    <p>{newReleases[count]?.artists[0].name}</p>
                </div>
                
                <ProgressBar
                    completed={0}
                    height={5}
                    bgColor='rgb(28, 137, 161)'
                    className={styles.progressBar} />
                <div className={styles.controls}>
                    <FaRandom
                        onClick={() => setCount(Math.floor(Math.random() * 19) + 1)} />
                    <AiFillStepBackward style={{ fontSize: '30px' }}
                        onClick={() => { if (count > 0) { setCount(count - 1) } }} />
                    <BsFillPlayCircleFill style={{ fontSize: '45px' }} />
                    <AiFillStepForward style={{ fontSize: '30px' }}
                        onClick={() => { if (count < newReleases.length - 1) { setCount(count + 1) } }} />
                    <TbRepeat />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Music