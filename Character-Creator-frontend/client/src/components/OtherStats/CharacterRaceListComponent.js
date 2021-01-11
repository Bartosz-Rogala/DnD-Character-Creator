import React, { Component } from 'react';
import OtherStatsService from '../../services/OtherStatsService';

class CharacterRaceListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            races: []
        }
    }

    componentDidMount() {
        OtherStatsService.getCharacterRaces().then(res => {
            this.setState({ races: res.data })
        })
    }


    render() {
        return (
            <div>
                <h2 className="ui center aligned header">Character Races</h2>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>age limits</th>
                        <th>height limits</th>
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
                        this.state.races.map(
                            race =>
                            <tr key={race.id}>
                                <td data-label="Name">{race.raceName}</td>
                                <td data-label="Description">{race.raceDescription}</td>
                                <td data-label="ageLimits">from {race.ageLowerLimit} to {race.ageUpperLimit}</td>
                                <td data-label="heightLimits">from {race.heightLowerLimit}m to {race.heightUpperLimit}m</td>
                                <td data-label="speed">{race.speed}</td>
                                <td data-label="strengthBonus">{race.strengthBonus}</td>
                                <td data-label="dexterityBonus">{race.dexterityBonus}</td>
                                <td data-label="constitutionBonus">{race.constitutionBonus}</td>
                                <td data-label="intelligenceBonus">{race.intelligenceBonus}</td>
                                <td data-label="wisdomBonus">{race.wisdomBonus}</td>
                                <td data-label="charismaBonus">{race.charismaBonus}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
            </div>
        );
    }
}

export default CharacterRaceListComponent;