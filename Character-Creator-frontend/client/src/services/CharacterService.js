import axios from 'axios';

const CHARACTER_API_BASE_URL = "http://localhost:8080/api/v1/character";

class CharacterService {

    // Create character
    createCharacter(character) {
        return axios.post(CHARACTER_API_BASE_URL + "/create", character);
    }

    // Get character by Id
    getCharacterById(characterId) {
        return axios.get(CHARACTER_API_BASE_URL + '/created/' + characterId);
    }

    // Get character for pdf export
    getExportCharacterById(characterId) {
        return axios.get(CHARACTER_API_BASE_URL + "/export", {
            params: {
                id: `${characterId}`
            },
            responseType: 'blob'
        });
    }
}

export default new CharacterService();