import RightArrow from "../../public/icons/RightArrow"
import LeftArrow from "../../public/icons/LeftArrow"
import Play from "../../public/icons/Play"
import Pause from "../../public/icons/Pause"

const LowControls = ({ isPlaying, setIsPlaying, setThumb, songIndex, setSongIndex, dark, setDark }) => {
  return (
    <div className="flex w-full h-14 px-20 items-center justify-between">

      {/* RIGHT ARROW */}
      <div onClick={() => {
        setThumb(0);
        songIndex !== 0
          ? setSongIndex(songIndex - 1)
          : setSongIndex(3)
      }} className={`p-1 ${dark ? "hover:bg-[#2e324b]" : "hover:bg-gray-300"}  duration-200 rounded cursor-pointer`}>
        <RightArrow dark={dark} setDark={setDark} />
      </div>

      {/* CENTRAL PLAY BUTTON */}
      <div className={`p-1 ${dark ? "hover:bg-[#2e324b]" : "hover:bg-gray-300"} duration-200 rounded cursor-pointer`}>
        {
          isPlaying
            ? <Pause isPlaying={isPlaying} setIsPlaying={setIsPlaying} dark={dark} setDark={setDark} />
            : <Play isPlaying={isPlaying} setIsPlaying={setIsPlaying} dark={dark} setDark={setDark} />
        }
      </div>

      {/* LEFT ARROW */}
      <div onClick={() => {
        setThumb(0);
        songIndex !== 3
          ? setSongIndex(songIndex + 1)
          : setSongIndex(0)
      }} className={`p-1 ${dark ? "hover:bg-[#2e324b]" : "hover:bg-gray-300"} duration-200 rounded cursor-pointer`}>
        <LeftArrow dark={dark} setDark={setDark} />
      </div>


    </div>
  )
}

export default LowControls