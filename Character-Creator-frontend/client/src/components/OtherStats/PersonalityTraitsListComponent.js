import React, { Component } from 'react';
import OtherStatsService from '../../services/OtherStatsService';

class PersonalityTraitsListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            personalityTraits: []
        }
    }

    componentDidMount() {
        OtherStatsService.getPersonalityTraits().then(res => {
            this.setState({ personalityTraits: res.data })
        })
    }


    render() {
        return (
            <div>
                <h2 class="ui center aligned header">Personality Traits</h2>
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Trait</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.personalityTraits.map(
                            personalityTrait =>
                            <tr key={personalityTrait.id}>
                                <td data-label="Id">{personalityTrait.id}</td>
                                <td data-label="Trait">{personalityTrait.trait}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        );
    }
}

export default PersonalityTraitsListComponent;