import React, { useState ,useEffect} from 'react'
import '../css/MusicPlayer.css'
import { Player } from './mscreens/Player'
import {RecommendationSide} from './mscreens/RecommendationSide'

// import s1 from './mscreens/music/hey.mp3'
// import s2 from './mscreens/music/ukulele.mp3'
// import s3 from './mscreens/music/summer.mp3'
import { SearchBar } from './mscreens/SearchBar'
import { useHistory } from 'react-router-dom'

export const MusicPlayer = () => {
    const [songUrls, setsongUrls] = useState([]);
    const [playingsong, setplayingsong] = useState('1-UhXIRHrCcReeXNpxGxMk3GJiqqIiq_V') //currently playing song
    const [lurl, setlurl] = useState([])
    const history=useHistory()

    useEffect(()=>{
        const fetchSong=async()=>{
            try{
                console.log("lolu")
                const token=localStorage.getItem('jwt')
                var songs=await fetch("/songs",{
                 method:"get",
                 headers:{
                   "Authorization":`Bearer ${token}`,
                   "Content-Type":"application/json"
                 }
               })
                songs=await songs.json()
    
                //useHistory().push('/signin')
                if(songs.error){
                    history.push('/signin')    
                }
                const jsongs=await songs.result
                //console.log("hmm",jsongs)
                setlurl(jsongs)
                setsongUrls(jsongs)
                //console.log("lolu")
    
             }
             catch(err){
               console.log(err)
             }
        }
        fetchSong();
    },[])

    const init=()=>{
        if(songUrls.length){
            //console.log("init")
            setplayingsong(songUrls[0].googleid)
            //console.log(playingsong)
        }
    }
    useEffect(init,[songUrls])

    return (
        <div className="main">
            <div className="head">
                <div className="fname" style={{flexBasis:"20%"}}>
                    <h3>{localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')).name:""}</h3>
                </div>
                <div className="fmusicplayer" style={{flexBasis:"60%"}}>
                    <h1>Music Recommender</h1>
                </div>
                <div className="flogout" style={{flexBasis:"20%",padding:'0',margin:'0'}} 
                onClick={()=>{history.push('/signin');localStorage.clear()}}>
                    <h3>Logout</h3>
                </div>
            </div>

            <div className="body">
                <div className="PSmain"> {/*Left Side */}
                        <SearchBar/>
                <Player songUrls={songUrls} setsongUrls={setsongUrls} lurl={lurl} playingsong={playingsong} setplayingsong={setplayingsong}/>

                </div> 
                <RecommendationSide songUrls={songUrls} lurl={lurl} setsongUrls={setsongUrls} />   

            </div>
        </div>
    )
}
