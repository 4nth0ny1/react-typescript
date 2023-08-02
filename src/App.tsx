import React from "react";
import "./App.css";
import { List } from "./components/generics/List";

function App() {
  return (
    <div className="App">
      <h1>React Typescript Demo</h1>
      <hr></hr>
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          { id: 1, first: "Bruce", last: "Wayne" },
          { id: 2, first: "Clark", last: "Kent" },
          { id: 3, first: "Pricess", last: "Diana" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
