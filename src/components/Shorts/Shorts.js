import React from 'react'
import styles from './Shorts.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from "react-player";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Shorts() {
    const navigate = useNavigate()
    const allData = [
        {
            thumbnail: require('../../assets/Image/video1.jpg'),
            url: 'https://drive.google.com/uc?id=1oNL5wQuNQmFaz9zZ7WvatKFiPEI5h6ab&export=download',
            videoTime: 12.25,
            channelImage: require('../../assets/Image/ronak.jpg'),
            coverImage: require('../../assets/Image/bgimage.jpg'),
            videoTitle: 'title of video Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
            channelName: 'buoyancy',
            videoView: '28k',
            videoLaunch: '1 month ago',
            categoryType: 'gaming',
            subscribers: '34.2M'
        },
        {
            thumbnail: require('../../assets/Image/video2.jpg'),
            url: 'https://drive.google.com/uc?id=1qsOy_go71JrtfWiHnjX45hvkylkmvo1X&export=download',
            videoTime: 10.51,
            channelImage: require('../../assets/Image/krupal.png'),
            coverImage: require('../../assets/Image/bgimage1.jpg'),
            videoTitle: 'ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
            channelName: 'ITC',
            videoView: '18k',
            videoLaunch: '5 month ago',
            categoryType: 'music',
            subscribers: '14M'
        },
        {
            thumbnail: require('../../assets/Image/video3.jpg'),
            url: 'https://drive.google.com/uc?id=1Ll9KowGW1SRJgTQP3adQgohFcXnttxzX&export=download',
            videoTime: 5.43,
            channelImage: require('../../assets/Image/noman.jpg'),
            coverImage: require('../../assets/Image/whatsappweb.jpg'),
            videoTitle: 'adipisicing elit. Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
            channelName: 'noman',
            videoView: '8k',
            videoLaunch: '2 month ago',
            categoryType: 'movie',
            subscribers: '8.5M'
        },
        {
            thumbnail: require('../../assets/Image/video1.jpg'),
            url: 'https://drive.google.com/uc?id=143LgiKUSav2GnhfAvk3V6RX_JC3-6bce&export=download',
            videoTime: 12.25,
            channelImage: require('../../assets/Image/ronak.jpg'),
            coverImage: require('../../assets/Image/bgimage.jpg'),
            videoTitle: 'title of video Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
            channelName: 'buoyancy',
            videoView: '28k',
            videoLaunch: '1 month ago',
            categoryType: 'gaming',
            subscribers: '34.2M'
        },
        {
            thumbnail: require('../../assets/Image/video2.jpg'),
            url: 'https://drive.google.com/uc?id=11LcWF7f9iFTDdops5tpM4U0EfMa-NtDO&export=download',
            videoTime: 10.51,
            channelImage: require('../../assets/Image/krupal.png'),
            coverImage: require('../../assets/Image/bgimage1.jpg'),
            videoTitle: 'ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
            channelName: 'ITC',
            videoView: '18k',
            videoLaunch: '5 month ago',
            categoryType: 'music',
            subscribers: '14M'
        },
        {
            thumbnail: require('../../assets/Image/video3.jpg'),
            url: 'https://drive.google.com/uc?id=1ks3vMQwKz5P2TSs2rOKRUrkmWQXIcxGN&export=download',
            videoTime: 5.43,
            channelImage: require('../../assets/Image/noman.jpg'),
            coverImage: require('../../assets/Image/whatsappweb.jpg'),
            videoTitle: 'adipisicing elit. Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
            channelName: 'noman',
            videoView: '8k',
            videoLaunch: '2 month ago',
            categoryType: 'movie',
            subscribers: '8.5M'
        },
    ]
    const YoutubeSlide = ({ url, isSelected }) => (
        <ReactPlayer width="100%" height="276px" url={url} playing={isSelected} />
    );
    YoutubeSlide.allData = {
        url: allData.string,
        isSelected: allData.bool
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.backIcon} onClick={() => {
                navigate('/')
            }} >
                <MdArrowBack />
            </div>

            <Carousel axis='vertical'
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                showArrows={false}>
                {allData.map((item, index) => (
                    <div key={index} style={{ width: '400px', height: '100vh' }}>
                        <video width="400px" height="100%" autoPlay>
                            <source src={item.url} type="video/mp4" />
                        </video>
                        {/* <YoutubeSlide
                            url={item?.url}
                            className='ReactPlayer'
                            playing={true}
                            width="100%"
                            height="100vh"
                            controls={true}
                        /> */}
                        <div>
                            <p className={styles.title}>{`${item.videoTitle.substring(0, 70)}...`}</p>
                        </div>
                        <div className={styles.channelDetails}>
                            <div className={styles.channelimg}>
                                <img src={item.channelImage} />
                            </div>
                            <p onClick={() => navigate('/channel', { state: { channelDetails: item } })}>{item.channelName} </p>
                            <p className={styles.subscribed}>Subscribed</p>
                        </div>
                    </div>
                ))
                }
            </Carousel>
        </div>
    )
}

export default Shorts;
