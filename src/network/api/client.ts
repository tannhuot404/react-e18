import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://6978b5fbcd4fe130e3d9eed7.mockapi.io",
  headers: { "Content-Type": "application/json" },
});