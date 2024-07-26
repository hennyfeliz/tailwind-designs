import SongPf from "../../public/icons/SongPf"

const PlayerContainer = ({ song }) => {
  return (
    <div className="flex flex-row px-4 w-full h-20 items-center space-x-2">
      <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
        <SongPf />
      </div>
      <div>
        <h1 className="font-semibold text-xl">{song.name_}</h1>
        <span className="text-gray-400">{song.artist}</span>
      </div>
    </div>
  )
}

export default PlayerContainer