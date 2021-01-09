import axios from 'axios';

const OTHER_API_BASE_URL = "http://localhost:8080/api/v1";

class OtherStatsService {
    getProficiencies() {
        return axios.get(OTHER_API_BASE_URL + "/proficiencies");
    }
}

export default new OtherStatsService();