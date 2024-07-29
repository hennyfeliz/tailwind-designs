import { useEffect, useState } from "react"
import Heart from "../../public/icons/Heart"
import TimesIcon from "../../public/icons/TimesIcon"
import Songs from "../../public/utils/Songs"

const SearchComponent = ({ search, setSearch, filteredList, dark }) => {

  const [rerender, setRerender] = useState(false)

  const heartHandler = (index) => {
    Songs[index].fav_ = !Songs[index].fav_
    setRerender(!rerender)
  }

  useEffect(() => {
  }, [rerender])

  return (
    <div className={`w-[340px] h-[280px] z-10 ${dark ? 'bg-[#161925] text-white' : 'bg-white text-black'} absolute rounded-lg transition-all ${search && "mt-[380px]"}`}>

      {/* CLOSE COMPONENT */}
      <div className={`p-1 w-8 h-8 items-center justify-center flex ${dark ? "bg-[#2e324b]" : "bg-gray-200"} rounded cursor-pointer absolute right-3 top-3`} onClick={() => setSearch(!search)}>
        <TimesIcon dark={dark} />
      </div>

      {/* SONG LIST */}
      <div className="overflow-y-auto">
        {
          filteredList.map((song, index) => (
            <div key={index} className="flex items-center space-x-2 py-3 px-5 cursor-pointer">
              <div className={`absolute right-14 p-1 ${dark ? "hover:bg-[#2e324b]" : "hover:bg-gray-300"} rounded transition-all flex items-center justify-center`} onClick={() => heartHandler(index)}>
                <Heart fav={song.fav_} dark={dark} />
              </div>
              <div className="w-11 h-11 bg-gray-300 rounded-lg"></div>
              <div className="-space-y-1">
                <p className="font-semibold">{song.name_}</p>
                <p className="text-gray-400">{song.artist}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SearchComponent