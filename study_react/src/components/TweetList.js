import React from "react";
import Tweet from "./Tweet";

const TweetList = ({name, tweets}) => {
  return (
      <div className="tweet-list">
          {tweets.map((tweet) => (
              <Tweet name="lee" tweets={tweets}/>
          ))}
      </div>
  );
};

export default TweetList;
