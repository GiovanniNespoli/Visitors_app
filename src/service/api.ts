import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const baseURL = `http://192.168.15.87:8000/api`;

export const api = axios.create({
  baseURL,
});

export const queryClient = new QueryClient();
