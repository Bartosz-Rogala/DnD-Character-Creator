import axios from 'axios';

const OTHER_API_BASE_URL = "http://localhost:8080/api/v1";

class OtherStatsService {
    getProficiencies() {
        return axios.get(OTHER_API_BASE_URL + "/proficiencies");
    }

    getPersonalityTraits() {
        return axios.get(OTHER_API_BASE_URL + "/personality_traits");
    }

    getLanguages() {
        return axios.get(OTHER_API_BASE_URL + "/languages");
    }

    getIdeals() {
        return axios.get(OTHER_API_BASE_URL + "/ideals");
    }

    getFlaws() {
        return axios.get(OTHER_API_BASE_URL + "/flaws");
    }

    getEquipment() {
        return axios.get(OTHER_API_BASE_URL + "/equipment");
    }

    getBonds() {
        return axios.get(OTHER_API_BASE_URL + "/bonds");
    }

    getCharacterRaces() {
        return axios.get(OTHER_API_BASE_URL + "/character_races");
    }

    getCharacterSubraces() {
        return axios.get(OTHER_API_BASE_URL + "/character_subraces");
    }

    getCharacterClasses() {
        return axios.get(OTHER_API_BASE_URL + "/character_classes");
    }

    getCharacterBackgrounds() {
        return axios.get(OTHER_API_BASE_URL + "/character_backgrounds");
    }

}

export default new OtherStatsService();