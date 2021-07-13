import React, { useState} from "react";
import { useHistory } from 'react-router-dom';
import zxcvbn from "zxcvbn";

// Services
import authService from "../../services/auth";

// Styles
import formStyles from "./Form.module.scss";


function Login({ formType, visibleEventHandler }) {
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  
  function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    authService.login(values).catch(error => console.error(error));
    history.push('/');
    
}
  
  return (
    <form
      className={formStyles.form}
      onSubmit={handleSubmit}
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
          value={values.password}
          className={formStyles.input}
          onChange={handleChange}
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
