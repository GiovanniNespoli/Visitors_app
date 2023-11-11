import axios from "axios";

const baseURL = `http://10.84.9.168:3333/api`;

export const api = axios.create({
  baseURL,
});
