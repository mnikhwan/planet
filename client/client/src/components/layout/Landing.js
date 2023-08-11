import React, { Component } from "react";
import { Link } from "react-router-dom";
import audio from '../../assets/music/bgmusic.mp3'
class Landing extends Component {

  playSound = () => {
      new Audio(audio).play();
    }


  render() {
    return (

      <div className="desktop">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mansalva:400|Mochiy+Pop+One:400" />
      <div className="div">
        <div className="overlap">
          <img className="stars-backgrounds" alt="Stars background" src="image/stars-background.png" />
          <img className="rocket-inject" alt="Rocket inject" src="image/rocket-inject-1.png" />
          <div className="main">
            <img className="galaxy" alt="Galaxy" src="image/galaxy.png" />
            <div className="main-TEXT">
              <div className="flex-container">
                <div className="text">
                  <span className="text-wrapper">
                    Ayo Menjelajah
                    <br />
                  </span>
                </div>
                <div className="span-wrapper">
                  <span className="text-wrapper">Tata Surya</span>
                </div>
              <Link to="/register">
                    <button onClick={this.playSound} className="button">Mulai</button>
                    </Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    );
  }
}
export default Landing;
