import React, { Component } from 'react';
import OtherStatsService from '../../services/OtherStatsService';

class CharacterClassListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classes: []
        }
    }

    componentDidMount() {
        OtherStatsService.getCharacterClasses().then(res => {
            this.setState({ classes: res.data })
        })
    }

    render() {
        return (
            <div>
                <h2 className="ui message dnd center aligned header">Character classNamees</h2>
            <table className="ui dnd celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>hit dice</th>
                        <th>hit points</th>
                        <th>saving throws</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.classes.map(
                            characterClass =>
                            <tr key={characterClass.id}>
                                <td data-label="Name">{characterClass.className}</td>
                                <td data-label="Description">{characterClass.classDescription}</td>
                                <td data-label="hitDice">{characterClass.hitDice}</td>
                                <td data-label="hitPoints">{characterClass.hitPoints}</td>
                                <td data-label="savingThrows">{characterClass.savingThrow}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
            </div>
        );
    }
}

export default CharacterClassListComponent;