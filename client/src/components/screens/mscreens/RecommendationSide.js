import React from 'react'
import { useEffect } from 'react'
import '../../css/RecommendationSide.css'


export const RecommendationSide = ({songUrls,setsongUrls}) => {
    const popSong=(song)=>{
        const newList=songUrls.filter(s=>s!==song)
        const currentlyPlaying=newList.shift()
        newList.unshift(song)
        newList.push(currentlyPlaying)
        setsongUrls(newList)
    }
    useEffect(() => {
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
        console.log(songUrls)
    }, [songUrls])
    return (
            <div className="Recommendations" style={{color:'white'}}>
                {songUrls?songUrls.map(song=>{
                    return <div className="songName" key={song.name} onClick={()=>{popSong(song)}}>{song.songname}</div>
                }):''}
            </div>
    )
}



































