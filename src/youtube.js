import axios from "axios";

export default axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyAAC7ZfKkDatbybl3Wecwo9daAr56K5Jt0",
  },
});
