import React from "react";
import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";

function App() {
  return (
    <div className="App">
      <h1>React Typescript Demo</h1>
      <hr></hr>
      <Private isLoggedIn={false} component={Profile} />
    </div>
  );
}

export default App;
