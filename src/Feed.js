import React from "react";
import "./feed.css";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {/* <Home/>
       <TweetBox/>
       <Post/> */}
    </div>
  );
}

export default Feed;
