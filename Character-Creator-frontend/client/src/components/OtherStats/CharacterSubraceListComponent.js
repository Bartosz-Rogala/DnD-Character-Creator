import React, { Component } from 'react';
import OtherStatsService from '../../services/OtherStatsService';

class CharacterSubraceListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            subraces: []
        }
    }

    componentDidMount() {
        OtherStatsService.getCharacterSubraces().then(res => {
            this.setState({ subraces: res.data })
        })

    }


    render() {
        console.log(this.state.subraces);
        return (
            <div>
                <h2 class="ui center aligned header">Character Subraces</h2>
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Parent race</th>
                        <th>speed</th>
                        <th>Strength Bonus</th>
                        <th>Dexterity Bonus</th>
                        <th>Constitution Bonus</th>
                        <th>Intelligence Bonus</th>
                        <th>Wisdom Bonus</th>
                        <th>Charisma Bonus</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.subraces.map(
                            subrace =>
                            <tr key={subrace.id}>
                                <td data-label="Name">{subrace.subraceName}</td>
                                <td data-label="Description">{subrace.subraceDescription}</td>
                                <td data-label="parentRace">{subrace.parentRace.raceName}</td>
                                <td data-label="speed">{subrace.speed}</td>
                                <td data-label="strengthBonus">{subrace.strengthBonus}</td>
                                <td data-label="dexterityBonus">{subrace.dexterityBonus}</td>
                                <td data-label="constitutionBonus">{subrace.constitutionBonus}</td>
                                <td data-label="intelligenceBonus">{subrace.intelligenceBonus}</td>
                                <td data-label="wisdomBonus">{subrace.wisdomBonus}</td>
                                <td data-label="charismaBonus">{subrace.charismaBonus}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
            </div>
        );
    }
}

export default CharacterSubraceListComponent;