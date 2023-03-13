import axios from "axios";

const client = axios.create({ baseURL: "https://test-task-be.onrender.com" });

export default client;
