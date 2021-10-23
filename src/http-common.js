import axios from "axios";

export default axios.create({
  baseURL: "http://enigmatic-stream-10784.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});