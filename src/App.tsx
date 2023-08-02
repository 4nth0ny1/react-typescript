import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";

function App() {
  const personName = {
    first: "John",
    last: "Joe",
  };

  const nameList = [
    { first: "Bill", last: "Johnson" },
    { first: "Steve", last: "Kent" },
    { first: "Alicea", last: "Miller" },
  ];

  return (
    <div className="App">
      <h1>React Typescript Demo</h1>
      <hr></hr>
    </div>
  );
}

export default App;
