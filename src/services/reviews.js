import axios from "axios";
const baseUrl = "http://localhost:3001/reviews";

const getAll = async () => {
  const res = axios.get(baseUrl);
  return res;
};

const create = async reviewObject => {
  const res = axios.post(baseUrl, reviewObject);
  return res.data;
};

const update = async (id, reviewObject) => {
  const res = axios.put(`${baseUrl}/:${id}`, reviewObject);
  return res.data;
};

const remove = async id => {
  const res = axios.delete(`${baseUrl}/:${id}`);
  return res.data;
};

export default { getAll, create, update, remove };
