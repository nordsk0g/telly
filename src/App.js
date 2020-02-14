import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";

// Components
import Header from "./Components/Header";
import Modal from "./Components/Modal/Modal";
import Backdrop from "./Components/Backdrop/Backdrop";
import Reviews from "./Components/Reviews/Reviews";
import Shows from "./Components/Shows/Shows";
import Profile from "./Components/Profile/Profile";

function App() {
  const [visible, setVisible] = useState(false);
  const [formType, setFormType] = useState(false);

  function visibleEventHandler() {
    setVisible(!visible);
  }

  function formEventHandler(e) {
    visibleEventHandler();
    setFormType(e.target.innerHTML);
  }

  return (
    <Router>
      {/* <LastLocationProvider> */}
      <Backdrop visible={visible} visibleEventHandler={visibleEventHandler} />
      <Modal
        visible={visible}
        formType={formType}
        visibleEventHandler={visibleEventHandler}
      />
      <Header formEventHandler={formEventHandler} />
      <Route exact path="/profile" render={() => <Profile />} />
      <Route exact path="/shows" render={() => <Shows />} />
      {/* </LastLocationProvider> */}
    </Router>
  );
}

export default App;
