import React from "react";
import s from '../styles/Tweet.module.css';

const Tweet = ({ name, tweets, setTweets, tweet }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };
  return (
    <div className={s.tweet}>
      <h2 className={s.title}>{name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
