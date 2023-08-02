import React from "react";
import "./App.css";
import { LoggedIn } from "./components/hooks/LoggedIn";
import { User } from "./components/hooks/User";

function App() {
  return (
    <div className="App">
      <h1>React Typescript Demo</h1>
      <hr></hr>
      <LoggedIn />
      <User />
    </div>
  );
}

export default App;
