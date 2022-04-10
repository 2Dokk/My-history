import React from "react";
import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const name = "Lee";
  const message = "Welcome";
  const sayHelloHandler = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div className="box">
        {/* <h1>Hello</h1>
        <CreateTweet />
        <TweetList name={name} message={message} /> */}
        <h1>{name}</h1>
        <button onClick={sayHelloHandler}>Click</button>
      </div>
    </div>
  );
}

export default App;
