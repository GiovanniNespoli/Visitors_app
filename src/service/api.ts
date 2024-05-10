import axios from "axios";

const baseURL = `http://10.189.85.28:8000/api`;

export const api = axios.create({
  baseURL,
});
