import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/fir-188eb/us-central1/api",
});
export default instance;
