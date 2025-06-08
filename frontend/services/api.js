import axios from "axios";

const api = axios.create({
  baseURL: "https://www.aijuridica.com.br"
});

export default api;
