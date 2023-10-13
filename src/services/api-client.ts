import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e3716044fc9a4bf2bea25a4e04409c9a",
  },
});
