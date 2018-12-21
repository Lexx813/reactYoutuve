import axios from "axios";
const KEY = "AIzaSyASgDtfyqALiEpA1EUhVGt17pmvSuxnCfQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
