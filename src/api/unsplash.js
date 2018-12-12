import axios from "axios";

axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 0293dbcfd33d0ecb051940e77844847c753e6a7bec7a493242e9ee51b5ddd3d2"
  }
});

export default axios;
