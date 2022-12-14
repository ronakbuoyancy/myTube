import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { MdNotInterested, MdClose } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import Header from '../Header/Header';
import Category from '../Category/Category';
import Account from '../Account/Account';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import PopupModal from '../PopupModal/PopupModal';
import VideoCard from '../VideoCard/VideoCard';
import allData from '../AllData/AllData'

function Home() {
  const [isPopupModal, setIsPopupModal] = useState(false)
  const [searchModal, setSearchModal] = useState(false)
  const [categoryName, setCategoryName] = useState()
  const [activeCategory, setactiveCategory] = useState('all')
  const [filterData, setFilterData] = useState()
  const [accountModal, setAccountModal] = useState(false)
  const [findCategory, setFindCategory] = useState()
  const [isNoDataFound, setIsNoDataFound] = useState(false)
  const [isMute, setIsMute] = useState(false);
  const [videoTime, setVideoTime] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    filterDataHandler()
  }, [categoryName])
  // console.log(videoTime);

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
  let nodata
  const findDataHandler = () => {
    if (findCategory) {
      // props.setPersons(props.Data.filter((ele) => ele.name.includes(value)))
      setFilterData(allData.filter((item) => item.categoryType.includes(findCategory)))

      nodata = allData.filter((item) => item.categoryType.includes(findCategory))
      if (nodata.length === 0) {
        setIsNoDataFound(true)
      }
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
        setactiveCategory('')
        nodata.length === 0 ? setIsNoDataFound(true) :
          setIsNoDataFound(false)
      }
    }
  }
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
    <div >{
      accountModal ? <Account
        setAccountModal={setAccountModal} /> : <>
        <Header
          setAccountModal={setAccountModal}
          findCategory={findCategory}
          setFindCategory={setFindCategory}
          handleKeyDown={handleKeyDown}
          searchModal={searchModal}
          setSearchModal={setSearchModal}
          setFilterData={setFilterData}
          setactiveCategory={setactiveCategory}
          setIsNoDataFound={setIsNoDataFound}
        />
        <Category
          setCategoryName={setCategoryName}
          activeCategory={activeCategory}
          setIsNoDataFound={setIsNoDataFound}
          setFindCategory={setFindCategory} />
        <div className={styles.videoContainer}>

          {!isNoDataFound ?
            filterData?.map((item, index) => (
              <VideoCard
                item={item}
                key={index}
                setIsPopupModal={setIsPopupModal}
                isPopupModal={isPopupModal}
                setVideoTime={setVideoTime}
                isMute={isMute}
                setIsMute={setIsMute}
              />
            )) :
            <p className={styles.noData}>no data found</p>
          }
        </div>
        {isPopupModal &&
          <PopupModal
            setIsPopupModal={setIsPopupModal}
            popupData={popupData} />
        }
        <Footer />
      </>}
    </div >
  )
}

export default Home;