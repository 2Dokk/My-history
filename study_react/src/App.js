import React from "react";
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";

function App() {
  
  return (
    <div>
      <div className="box">
        <h1>Hello</h1>
        <CreateTweet></CreateTweet>
        <Tweet author="Traversy Media"/>
      </div>
    </div>
  );
}

export default App;
