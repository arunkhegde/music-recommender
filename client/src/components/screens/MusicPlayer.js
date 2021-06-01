import React from 'react'
import '../css/MusicPlayer.css'
import { PlayerSide } from './mscreens/PlayerSide'
import { Recommendation } from './mscreens/Recommendation'
export const MusicPlayer = () => {
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
                <PlayerSide/>
                <Recommendation/>
            </div>
        </div>
    )
}
