import SongPf from "../../public/icons/SongPf"
import Heart from "../../public/icons/Heart"
import Songs from "../../public/utils/Songs"
import { useEffect, useState } from "react"

const PlayerContainer = ({ song, dark, index, setSongIndex }) => {

  const [rerender, setRerender] = useState(false)

  const heartHandler = (index) => {
    Songs[index].fav_ = !Songs[index].fav_
    Songs.map((song, i) => {
      if (i > index && song.fav_ === true) {
        setSongIndex(i)
      }
    })
    setRerender(!rerender)
  }

  useEffect(() => {
  }, [rerender])

  return (
    <div>
      {
        Songs[index].fav_ === true ?
          <div className="flex flex-row px-4 w-full h-20 items-center space-x-2" >
            <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
              <SongPf />
            </div>
            <div>
              <h1 className="font-semibold text-xl">{song.name_}</h1>
              <span className="text-gray-400">{song.artist}</span>
            </div>
            <div className="absolute right-7 mt-10">
              <Heart fav={song.fav_} dark={dark} heartHandler={heartHandler} index={index} />
            </div>
          </div >
          :
          <div className="flex flex-row px-4 w-full h-20 items-center space-x-2" >
            <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
              <SongPf />
            </div>
            <div>
              <h1 className="font-semibold text-xl">untitle</h1>
              <span className="text-gray-400">unknown</span>
            </div>
            <div className="absolute right-7 mt-10">
              <Heart fav={song.fav_} dark={dark} heartHandler={heartHandler} index={index} />
            </div>
          </div >
      }
    </div>
  )
}

export default PlayerContainer