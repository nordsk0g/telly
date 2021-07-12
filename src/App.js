import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";

// Components
import Header from "./Components/Header";
import Modal from "./Components/Modal/Modal";
import Backdrop from "./Components/Backdrop/Backdrop";
import Reviews from "./Components/Reviews/Reviews";
import Shows from "./Components/Shows/Shows";
import Show from "./Components/Show/Show";
import Actor from "./Components/Actor/Actor";
import Activity from "./Components/Profile/Activity";
import Login from "./Components/Form/Login";
import RegistrationForm from "./Components/Form/Form";

function App(props) {
  const [visible, setVisible] = useState(false);
  const [formType, setFormType] = useState(false);

  function visibleEventHandler(e) {
    setVisible(!visible);
  }

  function formEventHandler(e) {
    e.preventDefault();
    visibleEventHandler();
    setFormType(e.target.innerHTML);
  }

  return (
    <Router>
      {/* <LastLocationProvider> */}
      {/* <Backdrop visible={visible} visibleEventHandler={visibleEventHandler} />
      <Modal
        visible={visible}
        formType={formType}
        visibleEventHandler={visibleEventHandler}
      /> */}
      <Header formEventHandler={formEventHandler} />
      {/* <Switch> */}
        <Route path="/login" component={Login}/>
        <Route path="/register" component={RegistrationForm}/>
        <Route path="/activity" component={Activity} />
        <Route exact path="/shows" component={Shows} />
        <Route exact path="/show/:show" component={Show} />
        <Route exact path="/actor/:actor" component={Actor} />
        <Route exact path="/:profile/show/:show" component={Show} />
      {/* </Switch> */}
      {/* </LastLocationProvider> */}
    </Router>
  );
}

export default App;
