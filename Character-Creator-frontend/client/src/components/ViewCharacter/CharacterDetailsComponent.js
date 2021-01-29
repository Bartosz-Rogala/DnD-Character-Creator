import React, { Component } from 'react';
import CharacterService from '../../services/CharacterService';
import { GeneratePdf } from './GeneratePdf';

import AbilitiesComponent from './Details/AbilitiesComponent';
import BasicInformation from './Details/BasicInformationComponent';
import InspirationComponent from './Details/InspirationComponent';
import PhysicalCharacteristicsComponent from './Details/PhysicalCharacteristicsComponent';
import BackstoryComponent from './Details/BackstoryComponent';
import AlliesAndOrganisationsComponent from './Details/AlliesAndOrganisationsComponent';
import AdditionalFeaturesComponent from './Details/AdditionalFeaturesComponent';
import TreasureComponent from './Details/TreasureComponent';
import EquipmentComponent from './Details/EquipmentComponent';
import SkillsComponent from './Details/SkillsComponent';
import LangaugesComponent from './Details/LanguagesComponent';
import OtherProficienciesComponent from './Details/OtherProficienciesComponent';
import { Link } from 'react-router-dom';



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

    deleteCharacter(id) {
        //  rest api call
        CharacterService.deleteCharacterById(id).then( res => {
            this.props.history.push("/");
        })
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
                    <div className="dnd ui raised very padded text segment">
                            <h4>Actions</h4>
                            <table className="ui very basic collapsing celled table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <button className="ui DnDpositive button" onClick={() => GeneratePdf(this.state.id)}>
                                                Generate Pdf
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="ui DnDnegative button" onClick={() => this.deleteCharacter(this.state.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/view_characters">
                                                    <button className="ui secondary button">
                                                        Back
                                                    </button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            
                            
                        </div>
                        <div className="dnd ui raised very padded text segment">
                            Character Appearance (in the future)
                        </div>
                        <AbilitiesComponent info={this.state.character} />
                        <BackstoryComponent info={this.state.character} />
                        <EquipmentComponent info={this.state.character} />
                    </div>
                    <div className="column">
                        <BasicInformation info={this.state} />
                        <PhysicalCharacteristicsComponent info={this.state.character} />
                        <LangaugesComponent info={this.state} />
                        <AlliesAndOrganisationsComponent info={this.state.character} />
                    </div>
                    <div className="column">
                        <SkillsComponent info={this.state.character} />
                        <OtherProficienciesComponent info={this.state.character} />
                        <InspirationComponent info={this.state.character} />
                        <AdditionalFeaturesComponent info={this.state.character} />
                        <TreasureComponent info={this.state.character} />
                    </div>
                </div>
                <br></br>
                
                
                
            </div>
        );
    }
}

export default CharacterDetailsComponent;