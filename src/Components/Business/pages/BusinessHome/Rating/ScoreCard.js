import React from "react";

import "./styles.css";

const ScoreCard = () => {
  return (
    <div>
      <div class="row">
        <div class="side">
          <div>5 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-5"></div>
          </div>
        </div>
        <div class="side right">
          <div>150</div>
        </div>
        <div class="side">
          <div>4 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-4"></div>
          </div>
        </div>
        <div class="side right">
          <div>63</div>
        </div>
        <div class="side">
          <div>3 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-3"></div>
          </div>
        </div>
        <div class="side right">
          <div>15</div>
        </div>
        <div class="side">
          <div>2 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-2"></div>
          </div>
        </div>
        <div class="side right">
          <div>6</div>
        </div>
        <div class="side">
          <div>1 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-1"></div>
          </div>
        </div>
        <div class="side right">
          <div>20</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
