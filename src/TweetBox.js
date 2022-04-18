import React from "react";
import "./tweetBox.css";
import { GiPlayButton } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";

function TweetBox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetBox_input">
          <BsPeople src="https://images.pexels.com/photos/11653295/pexels-photo-11653295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <input type="text" placeholder="What's happening" />
        </div>
        <input
          type="text"
          className="tweetBox_ImageInput"
          placeholder="optional:Enter image URL"
        />
      </form>
      <GiPlayButton className="tweetBox_twitterButton" variant="outlined" />
    </div>
  );
}

export default TweetBox;
