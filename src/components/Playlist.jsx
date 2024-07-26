import Play from "../../public/icons/Play"
import Songs from "../../public/utils/Songs"

const Playlist = ({ resetSlider, showPlaylist, setShowPlaylist, setThumb, songIndex, setSongIndex }) => {

  const songIndexHandler = (index) => {
    setThumb(0);
    setSongIndex(index);
    resetSlider();
  }

  return (
    <div>
      <div className="flex flex-row items-center mt-3 justify-between px-8">
        <h1 className="font-semibold text-xl">Playlist</h1>
        <div className="py-1 px-3 hover:bg-gray-300 duration-200 rounded cursor-pointer">
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
            index !== songIndex ?
              <li onClick={() => {
                songIndexHandler(index);
              }} key={index} className="flex hover:bg-gray-200 px-2 rounded justify-between items-center h-10 border-b cursor-pointer" >
                <span>{song.name_}</span>
                <Play playlist={false} />
              </li>
              : null
          ))
        }
      </ul>

    </div >
  )
}

export default Playlist