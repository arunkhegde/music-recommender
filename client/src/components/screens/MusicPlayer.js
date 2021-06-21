import React, { useState ,useEffect} from 'react'
import '../css/MusicPlayer.css'
import { Player } from './mscreens/Player'
import {RecommendationSide} from './mscreens/RecommendationSide'

import s1 from './mscreens/music/hey.mp3'
import s2 from './mscreens/music/ukulele.mp3'
import s3 from './mscreens/music/summer.mp3'
import { SearchBar } from './mscreens/SearchBar'

export const MusicPlayer = () => {
    const [songUrls, setsongUrls] = useState([s1,s2,s3]);
    const [playingsong, setplayingsong] = useState('') //currently playing song

    const fetchSong=async()=>{
        try{
            var songs=await fetch("/users",{
             method:"get",
             headers:{
               "Content-Type":"application/json"
             }
           })
           songs=songs.json()
           console.log(songs)
         }
         catch(err){
           console.log(err)
         }
    }
    useEffect(()=>{
        fetchSong();
    })

    const init=()=>{
        setplayingsong(songUrls[0])
    }
    useEffect(init,[songUrls])

    return (
        <div className="main">
            <div className="head">
                <div className="fname" style={{flexBasis:"20%"}}>
                    <h3>Arun</h3>
                </div>
                <div className="fmusicplayer" style={{flexBasis:"60%"}}>
                    <h1>Music Recommender</h1>
                </div>
                <div className="flogout" style={{flexBasis:"20%",padding:'0',margin:'0'}}>
                    <h3>Logout</h3>
                </div>

            </div>

            <div className="body">
                <div className="PSmain"> {/*Left Side */}
                        <SearchBar/>
                <Player songUrls={songUrls} setsongUrls={setsongUrls} playingsong={playingsong} setplayingsong={setplayingsong}/>
                </div> 
                <RecommendationSide songUrls={songUrls} setsongUrls={setsongUrls} />        
            </div>
        </div>
    )
}
