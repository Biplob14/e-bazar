import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";

function App() {
  return (
    <div className="App">
      {/* Header component */}
      <Header />
      {/* Home Component */}
      <Home />
    </div>
  );
}

export default App;