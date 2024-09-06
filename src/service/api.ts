import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const baseURL = `https://visitors-nodejs-backend-2.onrender.com/api`;

export const api = axios.create({
  baseURL,
});

export const queryClient = new QueryClient();
