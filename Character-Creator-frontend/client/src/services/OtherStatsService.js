import axios from 'axios';

const OTHER_API_BASE_URL = "http://localhost:8080/api/v1";

class OtherStatsService {
    //standard get methods
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

    getAlignments() {
        return axios.get(OTHER_API_BASE_URL + "/alignments");
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

    //get subraces of proper races
    getSubracesofRace(raceId) {
        return axios.get(OTHER_API_BASE_URL + "/character_subraces/race", {
            params: {
                raceId: `${raceId}`
            }
        });
    }
}

export default new OtherStatsService();