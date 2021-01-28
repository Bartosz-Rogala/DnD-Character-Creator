import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterService from '../services/CharacterService';

class ViewCharactersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: []
        }

        this.deleteCharacter = this.deleteCharacter.bind(this);
    }

    componentDidMount() {
        CharacterService.getAllCharacters().then(res => {
            this.setState({ characters: res.data })
        })
    }

    deleteCharacter(id) {
        //  rest api call
        CharacterService.deleteCharacterById(id).then( res => {
            this.setState({characters: this.state.characters.filter(character => character.id !== id)});
        })
    }

    render() {
        return (
            <div>
            <h2 className="ui center aligned header">Bonds</h2>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Race</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.characters.map(
                            character =>
                            <tr key={character.id}>
                                <td data-label="Id">{character.id}</td>
                                <td data-label="Name">{character.characterName}</td>
                                <td data-label="Class">{character.characterClass.className}</td>
                                <td data-label="Race">{character.characterRace.raceName}</td>
                                <td data-label="Actions">
                                
                                <Link to={`/view_character/${character.id}`} className="item">
                                    <button className="ui positive button">
                                    View details
                                    </button>
                                </Link>
                                <button style={{marginLeft: "10px"}} className="ui negative button" onClick={() => this.deleteCharacter(character.id)}>
                                    Delete
                                </button>
                                </td>

                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
            </div>
        );
    }
}

export default ViewCharactersComponent;