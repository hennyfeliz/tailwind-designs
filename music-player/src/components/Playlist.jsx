import Songs from "../../public/utils/Songs"
import PlaylistIcon from "../../public/icons/PlaylistIcon"
import Heart from "../../public/icons/Heart"
import { useEffect, useState } from "react"

const Playlist = ({ resetSlider, showPlaylist, setShowPlaylist, setThumb, songIndex, setSongIndex, dark }) => {
  const [rerender, setRerender] = useState(false)

  const songIndexHandler = (index) => {
    setThumb(0);
    setSongIndex(index);
    resetSlider();
  }

  const heartHandler = (index) => {
    Songs[index].fav_ = !Songs[index].fav_
    setRerender(!rerender)
  }

  useEffect(() => {
  }, [rerender])

  return (
    <div>
      <div className="flex flex-row items-center mt-3 justify-between px-8">
        <h1 className="font-semibold text-xl">Playlist</h1>
        <div className={`py-1 px-3 duration-200 rounded cursor-pointer ${dark ? "hover:bg-[#2e324b]" : "hover:bg-gray-300"}`}>
          <span onClick={() => {
            setShowPlaylist(!showPlaylist);
          }}>
            {`${showPlaylist ? "Show Less" : "Show More"}`}
          </span>
        </div>
      </div>
      <ul className={`px-6 font-semibold text-gray-400 transition-all duration-200  ${showPlaylist ? "opacity-100 block" : "opacity-0 none"}`} >
        {
          Songs.map((song, index) => (
            index !== songIndex && song.fav_ === true ?
              <li key={index} className={`flex duration-200 px-2 rounded justify-between items-center h-10  cursor-pointer ${dark ? "hover:bg-[#2e324b]" : "hover:bg-gray-300"}`}>
                <span>{song.name_}</span>
                <div className={`pr-2 space-x-2 ${dark ? "hover:bg-[#2e324b]" : "hover:bg-gray-300"} rounded transition-all flex items-center justify-center`}>
                  <Heart fav={song.fav_} dark={dark} heartHandler={heartHandler} index={index} />
                  <PlaylistIcon playlist={false} songIndexHandler={songIndexHandler} index={index} />
                </div>
              </li>
              : null
          ))
        }
      </ul>

    </div >
  )
}

export default Playlist