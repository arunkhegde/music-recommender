import React from 'react'
import '../../css/RecommendationSide.css'


export const RecommendationSide = ({songUrls,setsongUrls}) => {
    const popSong=(song)=>{
        const newList=songUrls.filter(s=>s!==song)
        const currentlyPlaying=newList.shift()
        newList.unshift(song)
        newList.push(currentlyPlaying)
        setsongUrls(newList)
    }
    return (
            <div className="Recommendations" style={{color:'white'}}>
                {songUrls.map(song=>{
                    return <div className="songName" id={song.name} onClick={()=>{popSong(song)}}>{song.name}</div>
                })}
            </div>
    )
}



































