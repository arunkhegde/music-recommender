import React from 'react'
import '../../css/Player.css'
import image from './images/ukulele.jpg'
export const Player = () => {
    return (
        <div className="Pmain">
   
    <div class="music-container play" id="music-container">
      <div class="music-info">
        <h4 id="title">ukelele</h4>
        <div class="progress-container" id="progress-container">
          <div class="progress" id="progress"></div>
        </div>
      </div>

      <audio src="music/ukulele.mp3" id="audio"></audio>

      <div class="img-container">
        <img src={image} alt="music-cover" id="cover" />
      </div>
      
      {/* navigation */}
      <div class="navigation">
        
        <button id="prev" class="action-btn" >
          <i class="fas fa-backward"></i>
        </button>
        
        <button id="play" class="action-btn action-btn-big">
          <i class="fas fa-play"></i>
        </button>

        <button id="next" class="action-btn">
          <i class="fas fa-forward"></i>
        </button>

      </div>
      
      {/* volume */}
      <div class="volume" id="volume">
        <div>
          <i class="fas fa-volume-up"></i>
        </div>
        
        <div class="volume-sider-content">
          <div class="volume-slider-container" id="volume-slider-container">
            <div class="volume-slider" id="volume-slider">

            </div>
          </div>
      </div>

      </div>

      
    </div>
        
        </div>
    )
}
