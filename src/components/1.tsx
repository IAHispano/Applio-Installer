import { useState, useEffect } from "react";
import { Howl } from "howler";
import music from "../assets/background.mp3";

export default function Page1() {
    const [volume, setVolume] = useState(0.5);
    const [audio] = useState(new Howl({
      src: [music],
      loop: true,
      volume: 0,
    }));
  
    useEffect(() => {
      audio.play();
      audio.fade(0, volume, 2000);
      
      return () => {
        audio.pause();
      };
    }, [audio]);
  
    const handleVolumeChange = (event: { target: { value: string; }; }) => {
      const newVolume = parseFloat(event.target.value);
      audio.volume(newVolume);
      setVolume(newVolume);
    };

  return (
    <div className="absolute bottom-3 right-0 transform mx-3 flex items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/></svg>
      <input
        className="accent-white shadow-none w-24 appearance-none h-1 bg-white/30 rounded-xl" 
        type="range"
        min="0.0"
        max="1.0"
        step="0.001"
        defaultValue={volume}
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  )
}
