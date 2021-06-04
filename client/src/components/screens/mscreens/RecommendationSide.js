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
            <div class="Recommendations" style={{color:'white'}}>
                {songUrls.map(song=>{
                    return <div class="songName" onClick={()=>{popSong(song)}}>{song}</div>
                })}
            </div>
    )
}



































