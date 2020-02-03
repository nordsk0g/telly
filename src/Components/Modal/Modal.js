import React from "react";

// Component
import SignUpForm from "../SignUpForm";

// Styles
import modalStyles from "./Modal.module.scss";

function Modal({ form }) {
  function selectForm(form) {
    if (form === "Sign In") {
      return <SignUpForm />;
    }
  }

  return (
    <div className={modalStyles.modal}>
      <section className={modalStyles.content}>{selectForm(form)}</section>
    </div>
  );
}

export default Modal;
