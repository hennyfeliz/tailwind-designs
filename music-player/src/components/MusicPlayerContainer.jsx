import { useEffect, useState } from "react";
import updateBackground from "../../public/utils/SliderRangeProgress";
import Header from "./Header";
import PlayerContainer from "./PlayerContainer";
import Controls from "./Controls";
import LowControls from "./LowControls";
import Playlist from "./Playlist";
import Songs from "../../public/utils/Songs";
import Switch from "./Switch";
import SearchComponent from "./SearchComponent";

const MusicPlayerContainer = () => {

  const [dark, setDark] = useState(false)

  const [isPlaying, setIsPlaying] = useState(false);
  const [thumb, setThumb] = useState(0);
  const [songIndex, setSongIndex] = useState(2);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const [search, setSearch] = useState(true);

  const [input, setInput] = useState('');
  const [filteredList, setFilteredList] = useState(Songs);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    filterList(value);
  };

  const filterList = (value) => {
    const filtered = Songs.filter((item) =>
      item.name_.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filtered);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  useEffect(() => {
    updateBackground();

    if (isPlaying) {
      setTimeout(() => {
        setThumb(thumb + 1);
      }, 1000);
    }

  }, [isPlaying, thumb]);

  return (
    <>
      <div className="flex flex-col space-y-2 justify-center items-center bg-[#40b4d2] h-screen w-full">
        <Switch input={input} handleInputChange={handleInputChange} search={search} setSearch={setSearch} setShowPlaylist={setShowPlaylist} dark={dark} setDark={setDark} />

        {/* HEADER CONTAINER */}
        <div className={`w-[340px] 
        ${showPlaylist ? "h-[380px]" : "h-[280px]"} 
         rounded-lg transition-all duration-200 relative overflow-hidden ${dark ? 'bg-[#161925] text-white' : 'bg-white text-black'}`}>

          {/* SEARCH COMPONENT */}
          <SearchComponent filteredList={filteredList} search={search} setSearch={setSearch} dark={dark} />

          {/* HEADER */}
          <Header dark={dark} />

          {/* PLAYER CONTAINER */}
          <PlayerContainer song={Songs[songIndex]} index={songIndex} setSongIndex={setSongIndex} />

          {/* CONTROLS */}
          <Controls thumb={thumb} song={Songs[songIndex]} dark={dark} />

          {/* LOW CONTROLS */}
          <LowControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} setThumb={setThumb} songIndex={songIndex} setSongIndex={setSongIndex} dark={dark} setDark={setDark} />

          {/* PLAYLIST */}
          <Playlist dark={dark} showPlaylist={showPlaylist} setShowPlaylist={setShowPlaylist} setThumb={setThumb} songIndex={songIndex} setSongIndex={setSongIndex} />
        </div>
      </div>
    </>
  );
}

export default MusicPlayerContainer