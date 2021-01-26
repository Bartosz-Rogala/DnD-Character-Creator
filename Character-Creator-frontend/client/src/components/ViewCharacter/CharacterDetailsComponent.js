import React, { Component } from 'react';
import CharacterService from '../../services/CharacterService';

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

    generatePdf(id) {

        CharacterService.getExportCharacterById(id)
        .then(response => {
            //Create a Blob from the PDF Stream
                const file = new Blob(
                  [response.data],
                  {type: 'application/pdf'});
            //Build a URL from the file
                const fileURL = URL.createObjectURL(file);
            //Open the URL on new Window
                window.open(fileURL);
            })
            .catch(error => {
                console.log(error);
            });
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
                
                <button style={{marginLeft: "10px"}} className="ui button" onClick={() => this.generatePdf(this.state.id)}>
                    Generate pdf
                </button>
                
            </div>
        );
    }
}

export default CharacterDetailsComponent;