import React, { Component } from 'react';
import CharacterService from '../../services/CharacterService';
import { Link } from 'react-router-dom';

import AbilitiesComponent from './Details/AbilitiesComponent';
import BasicInformation from './Details/BasicInformationComponent';
import InspirationComponent from './Details/InspirationComponent';
import PhysicalCharacteristicsComponent from './Details/PhysicalCharacteristicsComponent';
import BackstoryComponent from './Details/BackstoryComponent';
import AlliesAndOrganisationsComponent from './Details/AlliesAndOrganisationsComponent';
import AdditionalFeaturesComponent from './Details/AdditionalFeaturesComponent';
import TreasureComponent from './Details/TreasureComponent';

class CharacterDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            character: {},
            characterClass: {},
            characterRace: {},
            characterSubrace: {},
            characterBackground: {},
            alignment: {}
        }
    }

    componentDidMount() {
        CharacterService.getCharacterById(this.state.id).then(res => {
            this.setState({character: res.data})
            this.setState({characterClass: res.data.characterClass})
            this.setState({characterRace: res.data.characterRace})
            this.setState({characterSubrace: res.data.characterSubrace})
            this.setState({characterBackground: res.data.characterBackground})
            this.setState({alignment: res.data.alignment})
        })
    }

    render() {
        return (
            <div>
                <div className="ui three column doubling stackable grid container">
                    <div className="column">
                        <div className="ui raised very padded text segment">
                            Character Appearance (in the future)
                        </div>
                        <AbilitiesComponent info={this.state.character} />
                        <BackstoryComponent info={this.state.character} />
                    </div>
                    <div className="column">
                        <BasicInformation info={this.state} />
                        <PhysicalCharacteristicsComponent info={this.state.character} />
                        <AlliesAndOrganisationsComponent info={this.state.character} />
                    </div>
                    <div className="column">
                        <InspirationComponent info={this.state.character} />
                        <AdditionalFeaturesComponent info={this.state.character} />
                        <TreasureComponent info={this.state.character} />
                    </div>
                </div>
                <br></br>
                <Link to="/">
                    <button style={{marginLeft: "10px"}} className="ui button">
                        Generate pdf
                    </button>
                </Link>
            </div>
        );
    }
}

export default CharacterDetailsComponent;