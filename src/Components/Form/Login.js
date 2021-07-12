import React, { useState } from "react";
import zxcvbn from "zxcvbn";

// Styles
import formStyles from "./Form.module.scss";


function Login({ formType, visibleEventHandler }) {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  
  function handleChange(e) {
  
  }
  
  return (
    <form
      className={formStyles.form}
      onSubmit={e => console.log(`submitting ${e.target.value}`)}
    >
        <div className={formStyles["form-item"]}>
          <label htmlFor="email" className={formStyles.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            className={formStyles.input}
            required
            />
        </div>
      <div className={formStyles["form-item"]}>
        <label htmlFor="password" className={formStyles.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          value={values.password}
          className={formStyles.input}
          onChange={formType === "Register" && handleChange}
          required
        />
      </div>
      <div className={formStyles["button-container"]}>
        <button className={formStyles.btn} type="submit">
          Login
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

export default Login;
