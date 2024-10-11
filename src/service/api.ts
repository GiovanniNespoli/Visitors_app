import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

// const baseURL = `https://visitors-nodejs-backend-2.onrender.com/api`;
const baseURL = `http://10.189.85.38:3001/api`;

export const api = axios.create({
  baseURL,
});

export const queryClient = new QueryClient();
