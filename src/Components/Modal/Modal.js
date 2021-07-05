import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Component
import Login from "../Form/Login";
import Registration from "../Form/Registration";

// Styles
import modalStyles from "./Modal.module.scss";
import "./transition.css";

function Modal({ visible, formType, visibleEventHandler }) {
  const [title, setTitle] = useState("");
  const [form, setForm] = useState();

  useEffect(
    function selectForm() {
      if (formType == "Login") {
        setTitle("Log In To Telly");
        setForm(
          <Login visibleEventHandler={visibleEventHandler} />
        );
      } else if (formType == "Register") {
        setTitle("Register");
        setForm(
          <Registration visibleEventHandler={visibleEventHandler} />
        );
      }
    },
    [formType, visibleEventHandler]
  );

  return (
    <TransitionGroup component={null}>
      {visible && (
        <CSSTransition classNames="modal" timeout={600}>
          <div className={modalStyles["modal-overlay"]}>
            <div className={modalStyles.header}>
              <h3 className={modalStyles.title}>{title.toUpperCase()}</h3>
              <i
                className={`bx bx-x ${modalStyles["close-btn"]}`}
                onClick={visibleEventHandler}
              ></i>
            </div>
            <section className={modalStyles.content}>{form}</section>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}

export default Modal;
