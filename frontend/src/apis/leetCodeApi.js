import axios from "axios";

const instance = axios.create({
  baseURL: "https://leet-brag-ai-backend-c7a640063d67.herokuapp.com/",
});

export default instance;
