import React from "react";
import "./App.css";
import DataList from "./components/DataList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Saga Example</h1>
      </header>
      <main>
        <DataList />
      </main>
    </div>
  );
}

export default App;
