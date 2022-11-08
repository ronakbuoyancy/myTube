import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { MdNotInterested, MdClose } from "react-icons/md";
import { BsClock} from "react-icons/bs";
import Header from '../Header/Header';
import Category from '../Category/Category';
import Account from '../Account/Account';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import PopupModal from '../PopupModal/PopupModal';
import ReactPlayer from "react-player";
import VideoCard from '../VideoCard/VideoCard';



function Home() {
  const [PopupModal, setPopupModal] = useState(false)
  const [categoryName, setCategoryName] = useState()
  const [activeCategory, setactiveCategory] = useState('all')
  const [filterData, setFilterData] = useState()
  const [accountModal, setAccountModal] = useState(false)
  const navigate = useNavigate()
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
      categoryType: 'gaming',
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
      categoryType: 'music',
      subscribers: '14M'
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
      url: 'https://drive.google.com/uc?id=1MK6BPFJmV6iC3hE5mWAP-2x8DIqJiHF1&export=download',
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
      url: 'https://drive.google.com/uc?id=1_6XOtS4vT5RUhcn12iHPbiF05Yc82P-W&export=download',
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
  const filterDataHandler = () => {
    if (categoryName) {
      const new2 = allData.filter((item) => (item.categoryType === categoryName))
      setFilterData(new2)
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
  return (
    <div>{
      accountModal ? <Account
        setAccountModal={setAccountModal} /> : <>
        <Header
          setAccountModal={setAccountModal} />
        <Category
          setCategoryName={setCategoryName}
          activeCategory={activeCategory} />
        <div className={styles.videoContainer}>
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

    </div>
  )
}

export default Home;