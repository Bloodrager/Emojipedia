import React from "react";
import ReactDOM from "react-dom";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createDictionary(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createDictionary)}
    </div>
  );
}

export default App;
