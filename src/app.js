import React from "react";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
//styling from app.css
import './app.css';

function App() {
  return (
    <div>
      <Header/>
      <Navbar />
      <Section />
    </div>
  );
}

export default App;
