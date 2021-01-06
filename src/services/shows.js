import axios from "axios";
const baseUrl = "http://localhost:3001/shows";

const getAll = async => {
  const res = axios.get(baseUrl);
  return res;
};

const getShow = async id => {
  const res = axios.get(`${baseUrl}/${id}`);
  return res;
};

export default { getAll, getShow };
