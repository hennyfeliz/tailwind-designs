export default function Pause({ isPlaying, setIsPlaying, dark }) {
  return <svg onClick={() => setIsPlaying(!isPlaying)} width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 5V19M16 5V19" stroke={`${dark ? "#ffffff" : "#000000"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
}