import {React, useEffect, useState,useRef} from 'react'
import '../../css/Player.css'
import image from './images/ukulele.jpg'
import s1 from './music/hey.mp3'
import s2 from './music/ukulele.mp3'
import s3 from './music/summer.mp3'
export const Player = () => {
    const [songUrls, setsongUrls] = useState([s1,s2,s3])
    const [isPlaying, setisPlaying] = useState(false)
    const [playingsong, setplayingsong] = useState('')
    const [percentage, setpercentage] = useState(0)
    const [volPercentage, setvolPercentage] = useState(0)
    const [duration,setduration]=useState(0)

    const audioRef = useRef()
    const volContainerRef=useRef()
    //plays and pauses video based on isPlaying,plays song whenevr its changed
    useEffect(() => {
      const audio=audioRef.current
      isPlaying?audio.play():audio.pause();

    }, [isPlaying,playingsong])

    const nextSong=()=>{
      const skipsong=songUrls.shift()
      setsongUrls(old=>[...old,skipsong])
      setplayingsong(songUrls[0])  
    }

    const prevSong=()=>{
      const prevsong=songUrls.pop()
      setsongUrls(old=>[prevsong,...old])
      setplayingsong(songUrls[0]) 
    }

    //whenver time moves the silder moves
    const getCurrentTime=(e)=>{
      const p=(e.currentTarget.currentTime/e.currentTarget.duration)*100;
      setpercentage(p)
    }

    //skip song to time proportional to click on sliderContainer
    //The slider  
    const progressContainerClicked=(e)=>{
      audioRef.current.currentTime=(e.nativeEvent.offsetX/e.currentTarget.clientWidth)*duration
    }

    //on initial render pick first song
    useEffect(() => {
      setplayingsong(songUrls[0])
    },)



    return (
    <div className="Pmain">
   
    <div className={`music-container ${isPlaying?'play':''}`} 
    onMouseLeave={()=>{volContainerRef.current.style.display='none'}}
    onMouseEnter={()=>{volContainerRef.current.style.display='block'}}
    >
      <div className="music-info">
        <h4 id="title">ukelele</h4>
        <div className="progress-container" id="progress-container" onClick={progressContainerClicked}>
          <div className="progress" id="progress" style={{width:`${percentage}%`}}></div>
        </div>
      </div>

      <audio src={playingsong} id="audio" 
      ref={audioRef} onTimeUpdate={getCurrentTime}
      onEnded={nextSong}//on end of current song nextSong
      onLoadedData={(e)=>setduration(e.currentTarget.duration.toFixed(2))} //when song is loaded check duration
      onVolumeChange={(e)=>{setvolPercentage(e.currentTarget.volume*100)}}
      >
      </audio>

      <div className="img-container">
        <img src={image} alt="music-cover" id="cover" />
      </div>
      
      {/* navigation */}
      <div className="navigation" >
        
        <button id="prev" className="action-btn" onClick={prevSong} >
          <i className="fas fa-backward"></i>
        </button>
        
        <button  id="play" className="action-btn action-btn-big" onClick={()=>setisPlaying(!isPlaying)}>
          <i className={`fas ${isPlaying?'fa-pause':'fa-play'}`}></i>
        </button>

        <button id="next" className="action-btn" onClick={nextSong}>
          <i className="fas fa-forward"></i>
        </button>

      </div>
      
      {/* volume */}
      <div className="volume" id="volume" >
        <div>
          <i className="fas fa-volume-up"></i>
        </div>
        
        <div className="volume-sider-content">
          <div className="volume-slider-container" ref={volContainerRef} onClick={(e)=>{audioRef.current.volume=e.nativeEvent.offsetX/e.currentTarget.clientWidth}} >
            <div className="volume-slider" style={{width:`${volPercentage}%`}}>

            </div>
          </div>
      </div>

      </div>

      
    </div>
        
        </div>
    )
}
