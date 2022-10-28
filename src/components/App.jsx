import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function isRendered() {
  if(isLoggedIn){
    return <h1>Hello</h1>
  } else {
    return (
      <Login />
    );
  }
}

function App() {
  return (
    <div className="container">
      {isRendered()}
    </div>
  );
}

export default App;
