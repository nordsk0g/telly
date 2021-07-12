import React, { useState, useEffect } from "react";
import zxcvbn from "zxcvbn";
import validate from "../Utility Components/validateInfo";

// Styles
import formStyles from "./Form.module.scss";


function Registration({ formType, visibleEventHandler, submitForm }) {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)

    function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
    if (name === 'password') {
      const evaluation = zxcvbn(value);
    }
  }

  function handleSubmit(e) {
      e.preventDefault();
      setErrors(validate(values));
      setIsSubmitting(true);
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [errors])
  
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
          // required
          />
          {errors.username && <p className={formStyles.error}>{errors.username}</p>}
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
            // required
            />
            {errors.email && <p className={formStyles.error}>{errors.email}</p>}
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
          // required
          />
          {errors.password && <p className={formStyles.error}>{errors.password}</p>}
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
            // required
            />
            {errors.password2 && <p className={formStyles.error}>{errors.password2}</p>}
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
