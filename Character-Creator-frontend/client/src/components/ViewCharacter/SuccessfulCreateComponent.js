import React, { Component } from 'react';
import CharacterService from '../../services/CharacterService';
import { Link } from 'react-router-dom';
import { GeneratePdf } from "./GeneratePdf";

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
            <div className="dnd">
                <br></br>
                <h2 className="ui center aligned icon header">
                    <i className="check circle outline users icon"></i>
                    Congratulations!
                </h2>
                <h3 className="ui center aligned header">
                    You made your own character: <i>{this.state.character.characterName}</i>
                </h3>

                <div className="ui center aligned header">
                    <Link to={this.viewCharacter}>
                    <button className="ui DnDpositive button">
                        View Character
                    </button>
                    </Link>
                    
                    <button style={{marginLeft: "10px"}} className="ui secondary button" onClick={() => GeneratePdf(this.state.id)}>
                        Generate pdf
                    </button>
                </div>
                <br></br>
            </div>
        );
    }
}

export default SuccessfulCreateComponent;