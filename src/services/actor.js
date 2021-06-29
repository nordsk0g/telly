import axios from "axios";
const baseUrl = "http://localhost:3001/actor";

const getAll = async => {
  const res = axios.get(baseUrl);
  return res;
};

const getActor = async id => {
  const res = axios.get(`${baseUrl}/${id}`);
  return res;
};

export default { getAll, getActor };
