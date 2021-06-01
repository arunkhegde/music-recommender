import React from 'react'
import '../../css/PlayerSide.css'
import { Player } from './Player'
export const PlayerSide = () => {
    return (
        <div className="PSmain">
            <div className="search" style={{color:'white'}}>
                SearchBar
            </div>
            <Player/>
        </div>
    )
}
