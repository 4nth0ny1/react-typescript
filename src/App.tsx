import React from "react";
import "./App.css";
import { LoggedIn } from "./components/hooks/LoggedIn";

function App() {
  return (
    <div className="App">
      <h1>React Typescript Demo</h1>
      <hr></hr>
      <LoggedIn />
    </div>
  );
}

export default App;
