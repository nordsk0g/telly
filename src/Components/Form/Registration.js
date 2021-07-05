import React, { useState } from "react";
import zxcvbn from "zxcvbn";

// Styles
import formStyles from "./Form.module.scss";


function Registration({ formType, visibleEventHandler }) {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
    if (name === 'password') {
      const evaluation = zxcvbn(value);
      console.log(evaluation);
    }
  }

  function handleSubmit(e) {
      e.preventDefault();
      setTimeout(() => visibleEventHandler(), 1500)
  }

//   console.log(values)
  
  return (
    <form
      className={formStyles.form}
      onSubmit={handleSubmit}
    >
      <div className={formStyles["form-item"]}>
        <label htmlFor="username" className={formStyles.label}>
          Username
        </label>
        <input
          type="text"
          name="username"
          className={formStyles.input}
          value={values.username}
          onChange={handleChange}
          required
          />
      </div>
        <div className={formStyles["form-item"]}>
          <label htmlFor="email" className={formStyles.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            className={formStyles.input}
            value={values.email}
            onChange={handleChange}
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
          className={formStyles.input}
          value={values.password}
          onChange={handleChange}
          required
          />
      </div>
      <div className={formStyles["form-item"]}>
          <label htmlFor="password" className={formStyles.label}>
            Repeat Password
          </label>
          <input
            type="password"
            name="password2"
            className={formStyles.input}
            value={values.password2}
            onChange={handleChange}
            required
            />
        </div>
      <div className={formStyles["button-container"]}>
        <button
            className={formStyles.btn}
            type="submit"
            >
          Register
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

export default Registration;
