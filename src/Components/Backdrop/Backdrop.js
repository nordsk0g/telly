import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import backdropStyles from "./Backdrop.module.scss";
import "./transition.css";

function Backdrop({ visible, visibleEventHandler }) {
  return (
    <TransitionGroup component={null}>
      {visible && (
        <CSSTransition classNames="backdrop" timeout={300}>
          <div
            className={backdropStyles["backdrop-overlay"]}
            onClick={visibleEventHandler}
          ></div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}

export default Backdrop;
