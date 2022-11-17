import React from "react";
import styles from "./VideoCard.module.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { GoMute, GoUnmute } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { useState } from "react";
import { useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
let seekTime = 0
function VideoCard({
  item,
  setIsPopupModal,
  isPopupModal,
  setVideoTime,
  isMute,
  setIsMute
}) {
  const navigate = useNavigate();
  // const [View, setView] = useState(false);
  // const [seekTime, setSeekTime] = useState(0)
  // const [played, setPlayed] = useState(0);
  const [shouldPlay, updatePlayState] = useState(false);

  //console.log('videocard_seekTime', seekTime);

  return (
    <div className={styles.videoCard}>
      <div className={styles.videoScreen}>
        <div className={styles.video}>
          <div className={styles.muteContainer}
            onClick={() => setIsMute(!isMute)}>
            {isMute ?
              <GoMute className={styles.mute} /> :
              <GoUnmute className={styles.mute} />
            }
          </div>
          <VisibilitySensor
            onChange={(isVisible) => updatePlayState(isVisible)}
            offset={{
              bottom: '350'
            }}>

            <ReactPlayer
              loop={true}
              url={item.url}
              className="ReactPlayer"
              playing={shouldPlay}
              width="100%"
              height="100%"
              muted={isMute}
              // onSeek={(time) => console.log(time)}
              onProgress={(time) => {
                seekTime = time.playedSeconds

              }}
              onClick={() =>
                navigate("/videoscreen", { state: { selecteditem: item, seekTime: seekTime } })
              }

              onDuration={(duration) =>
                setVideoTime((preTime) => {
                  return [
                    ...preTime,
                    {
                      time: `${Math.floor(duration / 60)}:${Math.floor(
                        (duration / 60 - Math.floor(duration / 60)) * 60
                      )}`,
                    },
                  ];
                })
              }
            />
          </VisibilitySensor>


          <span>{item.videoTime}</span>

        </div>
        <div className={styles.videoDetails}>
          <div
            style={{ display: "flex" }}
            onClick={() =>
              navigate("/videoscreen", { state: { selecteditem: item } })
            }
          >
            <div className={styles.image}>
              <img src={item.channelImage}></img>
            </div>
            <div className={styles.detail}>
              <div className={styles.title}>
                {item.videoTitle.length <= 69
                  ? item.videoTitle
                  : `${item.videoTitle.substring(0, 70)}...`}
              </div>
              <div className={styles.channel}>
                {item.channelName.length <= 19
                  ? item.channelName
                  : `${item.channelName.substring(0, 20)}...`}
                <span>
                  <BsDot className={styles.oneDot} />
                </span>{" "}
                {item.videoView} views{" "}
                <span>
                  <BsDot className={styles.oneDot} />
                </span>{" "}
                {item.videoLaunch}
              </div>
            </div>
          </div>
          <div className={styles.dot}>
            <HiOutlineDotsVertical
              onClick={() => {
                setIsPopupModal(!isPopupModal);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
