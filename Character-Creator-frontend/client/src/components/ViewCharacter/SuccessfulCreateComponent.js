import React, { Component } from 'react';
import CharacterService from '../../services/CharacterService';
import { Link } from 'react-router-dom';

class SuccessfulCreateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            character: {}
        }
    }

    componentDidMount() {
        CharacterService.getCharacterById(this.state.id).then(res => {
            this.setState({character: res.data})
        })

    }

    viewCharacter = () => {
        return "/view_character/" + this.state.character.id;
    }
    
    render() {
        return (
            <div>
                <h2 className="ui center aligned icon header">
                    <i className="check circle outline users icon"></i>
                    Congratulations!
                </h2>
                <h3 className="ui center aligned header">
                    You made your own character: <i>{this.state.character.characterName}</i>
                </h3>

                <div className="ui center aligned header">
                    <Link to={this.viewCharacter}>
                    <button className="ui positive button">
                        View Character
                    </button>
                    </Link>
                    <Link to="/">
                    <button style={{marginLeft: "10px"}} className="ui button">
                        Generate pdf
                    </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SuccessfulCreateComponent;