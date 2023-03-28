import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Header/Shop/Shop";

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
