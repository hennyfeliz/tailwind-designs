import { useState } from "react";
import SongIcon1 from "../../public/icons/SongIcon1"
import SongIcon3 from "../../public/icons/SongIcon3"
import Sound from "../../public/icons/Sound";
import NotSound from "../../public/icons/NotSound";

const Header = ({ dark }) => {

  const [enableMusic, setEnableMusic] = useState(true);
  const [sound, setSound] = useState(false);

  const soundHandler = () => {
    setSound(!sound);
  }

  return (
    <div className="flex justify-between items-center px-4 h-10 font-semibold">

      {/* HEADER TITLE */}
      <span>Music Player</span>

      {/* HEADER ICONS */}
      <div className="flex items-center space-x-1">
        <div className={`p-1 ${dark ? "hover:bg-[#2e324b]" : "hover:bg-gray-300"} duration-200 rounded cursor-pointer ${enableMusic ? (dark ? "bg-[#2e324b]" : "bg-gray-300") : ""}`}>
          {
            enableMusic
              ? <SongIcon3 dark={dark} enableMusic={enableMusic} setEnableMusic={setEnableMusic} />
              : <SongIcon1 dark={dark} enableMusic={enableMusic} setEnableMusic={setEnableMusic} />
          }
        </div>
        <div className={`p-1 ${dark ? "hover:bg-[#2e324b]" : "hover:bg-gray-300"} duration-200 rounded cursor-pointer 
          ${sound ? (dark ? "bg-[#2e324b]" : "bg-gray-300") : ""}`}>
          {
            sound
              ? <NotSound soundHandler={soundHandler} dark={dark} />
              : <Sound soundHandler={soundHandler} dark={dark} />
          }
        </div>
      </div>
    </div >
  )
}

export default Header