import React from "react";

import "./styles.css";

const ScoreCard = ({stars, starsPercentage}) => {
 
  return (
    <div>
      <div class="row">
        <div class="side">
          <div>5 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-5"  style={{width:`${starsPercentage[5]}%`}}></div>
          </div>
        </div>
        <div class="side right">
          <div>{stars[5]}</div>
        </div>
        <div class="side">
          <div>4 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-4"  style={{width:`${starsPercentage[4]}%`}}></div>
          </div>
        </div>
        <div class="side right">
          <div>{stars[4]}</div>
        </div>
        <div class="side">
          <div>3 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-3"  style={{width:`${starsPercentage[3]}%`}}></div>
          </div>
        </div>
        <div class="side right">
          <div>{stars[3]}</div>
        </div>
        <div class="side">
          <div>2 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-2"  style={{width:`${starsPercentage[2]}%`}}></div>
          </div>
        </div>
        <div class="side right">
          <div>{stars[2]}</div>
        </div>
        <div class="side">
          <div>1 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-1"  style={{width:`${starsPercentage[1]}%`}}></div>
          </div>
        </div>
        <div class="side right">
          <div>{stars[1]}</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
