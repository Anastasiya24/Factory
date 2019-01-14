import axios from "axios";

const client = axios.create({ baseURL:  "http://localhost:5000" });
client.interceptors.response.use(function(response) {
  return response;
});

export default client;
