import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
