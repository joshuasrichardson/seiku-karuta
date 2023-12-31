import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useAppContext } from "./AppProvider";

interface AudioPlayerProps {
  src?: string;
  color?: string;
  onAudioEnd: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  color = "text-green-700",
  onAudioEnd,
}) => {
  const { t } = useAppContext();

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPressedPlay, setHasPressedPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  const handlePlayPause = () => {
    setHasPressedPlay(true);
    if (isPlaying) audioRef.current?.pause();
    else audioRef.current?.play();

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current?.currentTime;
    const duration = audioRef.current?.duration;
    const calculatedProgress = ((currentTime || 0) / (duration || 1)) * 100;
    setProgress(calculatedProgress);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);

    onAudioEnd();
  };

  const handlePlaybackSpeedChange = (speed: number) => {
    setPlaybackRate(speed);
    if (audioRef.current) audioRef.current.playbackRate = speed;
  };

  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current?.addEventListener("ended", handleEnded);

    return () => {
      audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current?.removeEventListener("ended", handleEnded);
    };
  }, [onAudioEnd]);

  useEffect(() => {
    if (hasPressedPlay && audioRef.current && src) {
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
      audioRef.current.playbackRate = playbackRate;
    }
  }, [src]);

  const skip = handleEnded;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <style>
        {`progress::-moz-progress-bar {
            background: ${
              color === "text-green-700" ? "rgb(21 128 61)" : "rgb(29 78 216)"
            };
          }
          progress::-webkit-progress-value {
            background: ${
              color === "text-green-700" ? "rgb(21 128 61)" : "rgb(29 78 216)"
            };
          }`}
      </style>
      <audio ref={audioRef} src={src} onError={skip} />
      <button onClick={handlePlayPause} className={`w-24 h-24 ${color}`}>
        {isPlaying ? (
          <FaPause className="w-full h-full" />
        ) : (
          <FaPlay className="w-full h-full" />
        )}
      </button>
      <progress value={progress} max="100" className={`h-2 ${color}`} />
      <div className="flex gap-4 items-center mb-4">
        <label
          htmlFor="playback-speed"
          className="text-xs flex gap-2 items-center"
        >
          {t("Playback Speed")}:
          <select
            id="playback-speed"
            className=" w-10 bg-inherit text-gray-800"
            value={playbackRate}
            onChange={(e) =>
              handlePlaybackSpeedChange(parseFloat(e.target.value))
            }
          >
            <option value="0.5">0.5x</option>
            <option value="0.75">0.75x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
            <option value="1.75">1.75x</option>
            <option value="2">2x</option>
            <option value="2.25">2.25x</option>
            <option value="2.5">2.5x</option>
            <option value="2.75">2.75x</option>
            <option value="3">3x</option>
          </select>
        </label>
        <button type="button" onClick={skip} className="text-xs text-green-700">
          {t("Skip")}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
