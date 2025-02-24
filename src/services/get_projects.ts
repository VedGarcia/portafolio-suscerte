import axios from "axios";

const baseUrl = "https://api.github.com/users/VedGarcia/repos";

const getAll = () => {
    return axios.get(baseUrl);
}

export default {getAll}