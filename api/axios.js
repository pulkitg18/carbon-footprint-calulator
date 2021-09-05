import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/net-zero-3833c/us-central1/app/v1",
});

export default API;
