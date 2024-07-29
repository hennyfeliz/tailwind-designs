import Sun from "../../public/icons/Sun"
import Moon from "../../public/icons/Moon"
import Search from "../../public/icons/Search"

const Switch = ({ search, setSearch, setShowPlaylist, input, handleInputChange, dark, setDark }) => {
  return (
    <div className={`w-[340px] h-[40px] flex items-center px-4 font-semibold bg-white-lg transition-all duration-200 rounded-lg space-x-1 ${dark ? 'bg-[#161925] text-white' : 'bg-white text-gray-800'}`}>

      {/* SEARCH BAR */}
      <div className={`flex items-center w-full py-1 px-4  rounded-lg justify-between  ${dark ? " bg-[#2e324b]" : "bg-gray-200"}`}>

        {/* INPUT SEARCH */}
        <input className={`font-semibold focus:outline-none focus:border-none ${dark ? "bg-[#2e324b]" : "bg-gray-200"}`} type="text" placeholder="Search" value={input}
          onChange={handleInputChange} onFocus={() => {
            setSearch(!search)
            setShowPlaylist(false)
          }}
        />

        {/* SEARCH ICON */}
        <div className="ml-0">
          <Search dark={dark} />
        </div>
      </div>

      {/* DARK THEME HANDLER */}
      <div className={`p-1 duration-200 rounded cursor-pointer ${dark ? "hover:bg-[#2e324b]" : "hover:bg-gray-300"}`}>
        {
          dark
            ? <Sun dark={dark} setDark={setDark} />
            : <Moon dark={dark} setDark={setDark} />
        }
      </div>
    </div>
  )
}

export default Switch