import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

// Components
import Header from "./Components/Header";
import SignUpForm from "./Components/SignUpForm";
import Modal from "./Components/Modal/Modal";
import Backdrop from "./Components/Backdrop/Backdrop";

function App() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState(false);

  function visibleEventHandler(e) {
    setVisible(true);
    setForm(e.target.innerHTML);
    // setForm(e.target.value);
  }

  return (
    <Router>
      {visible && <Backdrop />}
      {visible && <Modal form={form} />}
      <Header visibleEventHandler={visibleEventHandler} />
    </Router>
  );
}

export default App;
