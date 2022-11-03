import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdNotInterested, MdClose } from "react-icons/md";
import { BsClock, BsDot } from "react-icons/bs";
import Header from '../Header/Header';
import Category from '../Category/Category';
import Account from '../Account/Account';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import PopupModal from '../PopupModal/PopupModal';

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
      video: require('../../assets/Image/bgimage.jpg'),
      videoTime: 12.25,
      channelImage: require('../../assets/Image/ronak.jpg'),
      videoTitle: 'title of video Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
      channelName: 'buoyancy',
      videoView: '28k',
      videoLaunch: '1 month ago',
      categoryType: 'gaming'
    },
    {
      video: require('../../assets/Image/bgimage1.jpg'),
      videoTime: 10.51,
      channelImage: require('../../assets/Image/krupal.png'),
      videoTitle: 'ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
      channelName: 'ITC',
      videoView: '18k',
      videoLaunch: '5 month ago',
      categoryType: 'music'
    },
    {
      video: require('../../assets/Image/whatsappweb.jpg'),
      videoTime: 5.43,
      channelImage: require('../../assets/Image/noman.jpg'),
      videoTitle: 'adipisicing elit. Tempora quibusdam, voluptates aliquam blanditiis illo voluptas',
      channelName: 'noman',
      videoView: '8k',
      videoLaunch: '2 month ago',
      categoryType: 'movie'
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
            <div className={styles.videoScreen} key={index}>
              <div className={styles.video}>
                <img src={item.video}
                  onClick={() =>
                    navigate('/videoscreen', { state: { selecteditem: item } })}>
                </img>
                <span>{item.videoTime}</span>
              </div>
              <div className={styles.videoDetails}>
                <div className={styles.image}>
                  <img src={item.channelImage}></img>
                </div>
                <div className={styles.detail}>
                  <div className={styles.title}>
                  {`${item.videoTitle.substring(0, 70)}...`}
                  </div>
                  <div className={styles.channel}>
                    {item.channelName} <span><BsDot className={styles.oneDot} /></span> {item.videoView} views <span><BsDot className={styles.oneDot} /></span> {item.videoLaunch}
                  </div>

                </div>
                <div className={styles.dot}>
                  <HiOutlineDotsVertical 
                  // onClick={() => {
                  //   setPopupModal(!PopupModal)
                  // }} 
                  />
                </div>
              </div>
            </div>
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