import React, { useEffect, useRef, useState } from 'react'
import styles from './Home.module.css'
import { MdNotInterested, MdClose } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import Header from '../Header/Header';
import Category from '../Category/Category';
import Account from '../Account/Account';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import PopupModal from '../PopupModal/PopupModal';
import ReactPlayer from "react-player";
import VideoCard from '../VideoCard/VideoCard';
import { useMemo } from 'react';
import Videoport from '../Videoport';

function Home() {
  const [PopupModal, setPopupModal] = useState(false)
  const [searchModal, setSearchModal] = useState(false)
  const [categoryName, setCategoryName] = useState()
  const [activeCategory, setactiveCategory] = useState('all')
  const [filterData, setFilterData] = useState()
  const [accountModal, setAccountModal] = useState(false)
  const [findCategory, setFindCategory] = useState()
  const navigate = useNavigate()
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  //   console.log(position);
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    filterDataHandler()
  }, [categoryName])
  const allData = [
    {
      thumbnail: require('../../assets/Image/video1.jpg'),
      url: 'https://drive.google.com/uc?id=1MK6BPFJmV6iC3hE5mWAP-2x8DIqJiHF1&export=download',
      videoTime: 12.25,
      channelImage: require('../../assets/Image/ronak.jpg'),
      coverImage: require('../../assets/Image/bgimage.jpg'),
      videoTitle: 'title of video Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
      channelName: 'buoyancy',
      videoView: '28k',
      videoLaunch: '1 month ago',
      categoryType: 'movie',
      subscribers: '34.2M'
    },
    {
      thumbnail: require('../../assets/Image/video2.jpg'),
      url: 'https://drive.google.com/uc?id=11LcWF7f9iFTDdops5tpM4U0EfMa-NtDO&export=download',
      videoTime: 10.51,
      channelImage: require('../../assets/Image/krupal.png'),
      coverImage: require('../../assets/Image/bgimage1.jpg'),
      videoTitle: 'consectetur adipisicing elit. ipsum dolor sit amet Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
      channelName: 'ITC',
      videoView: '12k',
      videoLaunch: '3 month ago',
      categoryType: 'music',
      subscribers: '14M'
    },
    {
      thumbnail: require('../../assets/Image/video1.jpg'),
      url: ' https://drive.google.com/uc?id=1ZoZhN53xYEPNdM4oNglJdnwD3TikXDNI&export=download',
      videoTime: 2.25,
      channelImage: require('../../assets/Image/ronak.jpg'),
      coverImage: require('../../assets/Image/bgimage.jpg'),
      videoTitle: 'ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
      channelName: 'buoyancy',
      videoView: '13k',
      videoLaunch: '6 day ago',
      categoryType: 'gaming',
      subscribers: '34.2M'
    },
    {
      thumbnail: require('../../assets/Image/video3.jpg'),
      url: 'https://drive.google.com/uc?id=1bMeRCw-oAr4hKOybUyrXrhINEW0dno0X&export=download',
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
      videoTime: 5.25,
      channelImage: require('../../assets/Image/ronak.jpg'),
      coverImage: require('../../assets/Image/bgimage.jpg'),
      videoTitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
      channelName: 'buoyancy',
      videoView: '20k',
      videoLaunch: '1.5 month ago',
      categoryType: 'music',
      subscribers: '34.2M'
    },
    {
      thumbnail: require('../../assets/Image/video2.jpg'),
      url: 'https://drive.google.com/uc?id=1_6XOtS4vT5RUhcn12iHPbiF05Yc82P-W&export=download',
      videoTime: 10.51,
      channelImage: require('../../assets/Image/krupal.png'),
      coverImage: require('../../assets/Image/bgimage1.jpg'),
      videoTitle: 'ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
      channelName: 'ITC',
      videoView: '18k',
      videoLaunch: '5 month ago',
      categoryType: 'movie',
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
      videoView: '2.8k',
      videoLaunch: '4 month ago',
      categoryType: 'gaming',
      subscribers: '8.5M'
    },
  ]
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
  const findDataHandler = () => {
    if (findCategory) {
      const new2 = allData.filter((item) => (item.categoryType === findCategory))
      setFilterData(new2)
      console.log({ new2 });

      setactiveCategory(categoryName)
      if (findCategory === 'all') {
        setFilterData(allData)
        setactiveCategory(categoryName)
      }
    }
    else {
      setFilterData(allData)
    }
  }
  const handleKeyDown = (e) => {
    if (!findCategory) {
    }
    else {
      if (e.key === 'Enter') {
        setFindCategory(findCategory)
        findDataHandler()
        setSearchModal(false)
      }
    }
  }
  const filterDataHandler = () => {
    if (categoryName) {
      const new2 = allData.filter((item) => (item.categoryType === categoryName))
      setFilterData(new2)
      console.log({ new2 });

      setactiveCategory(categoryName)
      if (categoryName === 'all') {
        setFilterData(allData)
        setactiveCategory(categoryName)
      }
    }
    else {
      setFilterData(allData)
    }
  }
  // const targerRef = useRef(null)
  // const View = Videoport({
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.3
  // }, targerRef);

  return (
    <div >{
      accountModal ? <Account
        setAccountModal={setAccountModal} /> : <>
        <Header
          setAccountModal={setAccountModal}
          setFindCategory={setFindCategory}
          handleKeyDown={handleKeyDown}
          searchModal={searchModal}
          setSearchModal={setSearchModal} />
        <Category
          setCategoryName={setCategoryName}
          activeCategory={activeCategory} />
        <div className={styles.videoContainer}>
          {/* <div className={styles.inscreen} style={{ backgroundColor: View ? 'red' : 'green' }}>

          </div>
          <div style={{ height: "100vh" }}></div>
          <h1 ref={targerRef}>enter in view</h1> */}
          {filterData?.map((item, index) => (
            <VideoCard
              item={item}
              index={index} />
          ))}

        </div>
        {PopupModal &&
          <PopupModal
            setPopupModal={setPopupModal}
            popupData={popupData} />
        }
        <Footer />
      </>}

    </div >
    // <div>
    //   <div className={styles.inscreen} style={{ backgroundColor: View ? 'red' : 'green' }}>
    //   </div>
    //   <div style={{ height: "100vh" }}></div>
    //   <h1 ref={targerRef}>enter in view</h1>
    // </div>
  )
}

export default Home;