import React from "react";
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";

function App() {
  const name = "Lee";
  return (
    <div>
      <div className="box">
        <h1>Hello</h1>
        <CreateTweet />
        <Tweet />
      </div>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
