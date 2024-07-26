/* src/App.jsx */
import SongIcon1 from "../public/icons/SongIcon1";
import SongIcon2 from "../public/icons/SongIcon2";
import SongIcon3 from "../public/icons/SongIcon3";
import LeftArrow from "../public/icons/LeftArrow";
import RightArrow from "../public/icons/RightArrow";
import Play from "../public/icons/Play";
import Pause from "../public/icons/Pause";
import "./App.css";
import { useEffect, useState } from "react";
import SongPf from "../public/icons/SongPf";

function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [thumb, setThumb] = useState(0);

  useEffect(() => {

    const slider = document.getElementById('slider');

    function updateBackground() {
      const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
      slider.style.setProperty('--range-progress', `${value}%`);
    }

    slider.addEventListener('input', updateBackground);
    updateBackground();

    setTimeout(() => {
      setThumb(thumb + 1);
    }, 1000);
  }, [thumb]);

  return (
    <div className="flex justify-center items-center bg-[#40b4d2] h-screen w-full">

      {/* HEADER CONTAINER */}
      <div className="w-[340px] h-[370px] bg-white rounded-lg">

        {/* HEADER */}
        <div className="flex justify-between items-center px-4 h-10 font-semibold">

          {/* HEADER TITLE */}
          <span>Music Player</span>

          {/* HEADER ICONS */}
          <div className="flex items-center space-x-1">
            <SongIcon1 />
            <SongIcon2 />
            <SongIcon3 />
          </div>
        </div>
        {/* PLAYER CONTAINER */}
        <div className="flex flex-row px-4 w-full h-20 items-center space-x-2">
          <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
            <SongPf />
          </div>
          <div>
            <h1 className="font-semibold text-xl">Blowin in the Wind</h1>
            <span className="text-gray-400">Bob Dylan</span>
          </div>
        </div>
        {/* CONTROLS */}
        <div className="w-full h-8 border px-4 items-center">
          {/* <input className="w-full h-6 opacity-70 outline-none bg-black" type="range" min="1" max="100" value="20" id="myRange" /> */}
          <input className="" type="range" min="1" max="60" value={thumb} id="slider" />
        </div>

        {/* LOW CONTROLS */}
        <div className="flex w-full h-14 px-20 items-center justify-between">
          <RightArrow />
          {
            isPlaying
              ? <Pause isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
              : <Play isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          }
          <LeftArrow />
        </div>

        {/* PLAYLIST */}
        <div>
          <h1 className="font-semibold text-xl px-6 mt-3">Playlist</h1>
          <ul className="px-6 font-semibold text-gray-400">
            <li className="flex justify-between items-center h-10 border-b">
              <span>Blowin in the Wind</span>
              <Play playlist={false} />
            </li>
            <li className="flex justify-between items-center h-10 border-b">
              <span>Like a Rolling Stone</span>
              <Play playlist={false} />
            </li>
            <li className="flex justify-between items-center h-10 border-b">
              <span>Knockin on Heavens Door</span>
              <Play playlist={false} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;