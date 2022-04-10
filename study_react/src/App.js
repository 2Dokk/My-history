import React from "react";
import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const name = "Lee";
  const message = "Welcome";
  return (
    <div>
      <div className="box">
        <h1>Hello</h1>
        <CreateTweet />
        <TweetList name={name} message={message} />
      </div>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
