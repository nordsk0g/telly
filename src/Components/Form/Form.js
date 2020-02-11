import React from "react";

// Styles
import formStyles from "./Form.module.scss";

function Form({ formType, visibleEventHandler }) {
  return (
    <form
      className={formStyles.form}
      onSubmit={e => console.log(`submitting ${e.target.value}`)}
    >
      <div className={formStyles["form-item"]}>
        <label htmlFor="username" className={formStyles.label}>
          Username
        </label>
        <input
          type="text"
          name="username"
          className={formStyles.input}
          required
        />
      </div>
      {formType === "Register" && (
        <div className={formStyles["form-item"]}>
          <label htmlFor="email" className={formStyles.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            className={formStyles.input}
            required
          />
        </div>
      )}
      <div className={formStyles["form-item"]}>
        <label htmlFor="password" className={formStyles.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          className={formStyles.input}
          required
        />
      </div>
      {formType === "Register" && (
        <div className={formStyles["form-item"]}>
          <label htmlFor="password" className={formStyles.label}>
            Repeat Password
          </label>
          <input
            type="password"
            name="password"
            className={formStyles.input}
            required
          />
        </div>
      )}
      <div className={formStyles["button-container"]}>
        <button className={formStyles.btn} type="submit">
          {formType}
        </button>
        <button
          className={formStyles.btn}
          type="button"
          onClick={visibleEventHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Form;
