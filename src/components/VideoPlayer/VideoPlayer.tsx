import { memo } from "react";

import MaterialIcon from "@components/Navigation/Menu/MenuItem/MaterialIcon";
import AuthButton from "@components/VideoPlayer/AuthPlaceholder/AuthButton";
import { IVideoPlayer } from "@components/VideoPlayer/AuthPlaceholder/video.types";
import { useVideo } from "@components/VideoPlayer/useVideo";

import useAuth from "../../hooks/useAuth";

import style from "./video-player.module.scss";

const VideoPlayer = ({ videoSource, slug }: IVideoPlayer) => {
  const { videoRef, video, actions } = useVideo();
  const { user } = useAuth();
  return (
    <div>
      {user ? (
        <>
          <video ref={videoRef} src={videoSource} className={style.video} />
          <div className={style.progressBarContainer}>
            <div style={{ width: `${video.progress}%` }} />
          </div>
          <div>
            <div>
              <button onClick={actions.revert}>
                <MaterialIcon icon="MdHistory" />
              </button>

              <button onClick={actions.toggleVideo}>
                <MaterialIcon
                  icon={video.isPlaying ? "MdPause" : "MdPlayArrow"}
                />
              </button>

              <button onClick={actions.fastForward}>
                <MaterialIcon icon="MdUpdate" />
              </button>

              <div className={style.timeControls}>
                <p className={style.controlsTime}>
                  {Math.floor(video.currentTime / 60) +
                    ":" +
                    ("0" + Math.floor(video.currentTime % 60)).slice(-2)}
                </p>
                <p> / </p>
                <p className={style.controlsTime}>
                  {Math.floor(video.videoTime / 60) +
                    ":" +
                    ("0" + Math.floor(video.videoTime % 60)).slice(-2)}
                </p>
              </div>
            </div>
            <div>
              <button onClick={actions.fullScreen}>
                <MaterialIcon icon="MdFullscreen" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <AuthButton slug={slug} />
      )}
    </div>
  );
};

export default memo(VideoPlayer);
