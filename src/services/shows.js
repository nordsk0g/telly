import axios from "axios";
const baseUrl = "http://localhost:3001/shows/";

const getAll = async () => {
  const res = axios.get(baseUrl);
  return res;
};

export default { getAll };
