import React, { useState } from 'react'
import '../../css/SearchBar.css'
export const SearchBar = () => {
    const [sugSongs, setsugSongs] = useState(['song1','song2','song3'])
    return (
        <div className="Smain">
            <input type={Text} className="search"/>
            <div className="suggestions" >
                {sugSongs.map((x)=>{
                    return <div class="sugsongs">{x}</div>
                })}
            </div>
        </div>
    )
}
