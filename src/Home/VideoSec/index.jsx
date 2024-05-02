import React from "react";
import "./VideoSec.scss";
import { FaPlay } from "react-icons/fa";
export default function VideoSec() {
  return (
    <div>
      <div className="video-section">
        <div className="video-container">
          <div className="content-wrapper">
            <a
              href="https://www.youtube.com/watch?v=PajrGWRvq4I&pp=ygURbmFnYXJwbGFpa2EgdmlkZW8%3D"
              className="popup-video"
            >
              <FaPlay className="play-icon" />
            </a>
            <div className="content-text">
              <p>Let make a fresh and green life</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sliding-ad">
        <marquee
          className="marquee"
          behavior="scroll"
          direction="left"
          scrollamount="10"
        >
          NEW AND EXCLUSIVE COLLECTION
          ------------------------------------------ MID SEASON SALE UP TO 50%
          OFF -------------------------------------------------- FEEL AMAZING
          EVERYDAY WITH
          HONGO---------------------------------------------------- NEW AND
          EXCLUSIVE COLLECTION ------------------------------------------ MID
          SEASON SALE UP TO 50% OFF
          -------------------------------------------------- FEEL AMAZING
          EVERYDAY WITH HONGO
        </marquee>
      </div>
    </div>
  );
}
