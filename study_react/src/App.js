import React, { useState } from "react";
import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const name = "Lee";
  const message = "Hello";
  return (
    <div>
      <div className="box">
        <CreateTweet />
        <TweetList name={name} message={message} />
      </div>
    </div>
  );
}

export default App;
