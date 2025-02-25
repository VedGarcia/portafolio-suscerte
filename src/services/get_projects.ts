import axios from "axios";

const baseUrl = "https://api.github.com/users/VedGarcia/repos";

const getAll = async () => {
    return await axios.get(baseUrl);
}

export default {getAll}