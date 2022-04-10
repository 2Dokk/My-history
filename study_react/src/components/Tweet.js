import React from "react";

const Tweet = ({name, tweets, setTweets, tweet}) => {
    const deleteTweet = () => {
        setTweets(tweets.filter(t => t !== tweet))
    }
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweet}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
