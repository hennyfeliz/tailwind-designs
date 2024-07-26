/* src/App.jsx */
import { useEffect, useState } from "react";
import LowControls from "./components/LowControls";
import Controls from "./components/Controls";
import Playlist from "./components/Playlist";
import PlayerContainer from "./components/PlayerContainer";
import Header from "./components/Header";
import updateBackground from "../public/utils/SliderRangeProgress";
import Songs from "../public/utils/Songs"
import "./App.css";

function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [thumb, setThumb] = useState(0);
  const [songIndex, setSongIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);

  useEffect(() => {
    updateBackground();

    if (isPlaying) {
      setTimeout(() => {
        setThumb(thumb + 1);
      }, 1000);
    }

  }, [isPlaying, thumb]);

  return (
    <div className="flex justify-center items-center bg-[#40b4d2] h-screen w-full">

      {/* HEADER CONTAINER */}
      <div className={`w-[340px] 
        ${showPlaylist ? "h-[380px]" : "h-[280px]"} 
        bg-white rounded-lg transition-all duration-200`}>

        {/* HEADER */}
        <Header />

        {/* PLAYER CONTAINER */}
        <PlayerContainer song={Songs[songIndex]} />

        {/* CONTROLS */}
        <Controls thumb={thumb} song={Songs[songIndex]} />

        {/* LOW CONTROLS */}
        <LowControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} setThumb={setThumb} songIndex={songIndex} setSongIndex={setSongIndex} />

        {/* PLAYLIST */}
        <Playlist showPlaylist={showPlaylist} setShowPlaylist={setShowPlaylist} setThumb={setThumb} songIndex={songIndex} setSongIndex={setSongIndex} />
      </div>
    </div>
  );
}

export default App;