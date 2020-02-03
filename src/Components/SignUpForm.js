import React from "react";

// Styles

function SignUpForm(props) {
  return (
    <form onSubmit={e => console.log(`submitting ${e.target.value}`)}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Enter Username..."
        name="username"
        required
      />
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Enter Eamil..." name="email" required />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter Password..."
        name="password"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Repeat Password..."
        name="password"
        required
      />
    </form>
  );
}

export default SignUpForm;
