import React, { useState } from "react";
import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import s from "./styles/App.module.css";

function App() {
  const [name, setName] = useState("Lee");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const message = "Hello";
  return (
    <div>
      <h1 className={s.title}>TWITTER LIGHT</h1>
      <div className="box">
        <CreateTweet
          textInput={textInput}
          setTextInput={setTextInput}
          tweets={tweets}
          setTweets={setTweets}
        />
        <TweetList
          setName={setName}
          name={name}
          tweets={tweets}
          setTweets={setTweets}
        />
      </div>
    </div>
  );
}

export default App;
