import axios from "axios";
const registerUrl = "http://localhost:3001/auth/register";
const loginUrl = "http://localhost:3001/auth/login";

const registerUser = async user => {
    const res = axios.post(registerUrl, user);
    return res.data;
  };

const login = async user => {
  const res = axios.post(loginUrl, user);
  return res.data;
};


export default { registerUser, login };