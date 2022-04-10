import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setTweets}) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet 
        name={name} 
        tweets={tweets} 
        tweet={tweet}
        setTweets={setTweets}
        />
      ))}
    </div>
  );
};

export default TweetList;
