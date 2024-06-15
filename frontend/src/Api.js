import axios from "axios";

const instance = axios.create({
  baseURL: "https://leet-brag-ai-backend-c7a640063d67.herokuapp.com/",
});

const emailValidationApi = axios.create({
  baseURL: "https://api.mailcheck.ai",
});

const exportApis = {
  instance,
  emailValidationApi,
};
export default exportApis;
