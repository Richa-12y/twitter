import React from "react";
import "./post.css";
import { BsPeople } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { BiComment } from "react-icons/bi";
import { MdRepeat } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdPublish } from "react-icons/md";

function Post() {
  return (
    <>
      <div className="post">
        <div className="post_avatar"></div>
        <BsPeople />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>displayname</h3>
            <span className="post_headerSpecial">
              <MdVerified className="post__badge" />
              @username
            </span>
          </div>
          <div className="post__headerDescription">
            <p>Hi this is me</p>
          </div>
          <img
            className="post_Image"
            src="https://images.pexels.com/photos/3059052/pexels-photo-3059052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <div className="post_footer">
            <BiComment />
            <MdRepeat />
            <MdOutlineFavoriteBorder />
            <MdPublish />
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
