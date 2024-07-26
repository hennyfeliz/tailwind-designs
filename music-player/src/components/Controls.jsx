const Controls = ({ thumb, song }) => {

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const timeToSeconds = (time) => {
    const [minutes, seconds] = time.split(':').map(Number);
    return (minutes * 60) + seconds;
  };

  return (
    <div className="w-full h-8 px-4 items-center">
      <input type="range" min="1" max={timeToSeconds(song.duration)} value={thumb} id="slider" />
      <div className="flex justify-between px-2 text-gray-500 font-extralight pt-1">
        <span>{formatTime(thumb)}</span>
        <span>{song.duration}</span>
      </div>
    </div>
  )
}

export default Controls;