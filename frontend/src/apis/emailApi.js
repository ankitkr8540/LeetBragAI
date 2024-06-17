import axios from "axios";

const emailValidationApi = axios.create({
  baseURL: "https://api.mailcheck.ai",
});

export default emailValidationApi;
