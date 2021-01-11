import React, { Component } from 'react';
import OtherStatsService from '../../services/OtherStatsService';

class ProficienciesListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            proficiencies: []
        }
    }

    componentDidMount() {
        OtherStatsService.getProficiencies().then(res => {
            this.setState({ proficiencies: res.data })
        })
    }

    render () {
        return (
            <div>
                <h2 class="ui center aligned header">Proficiencies</h2>
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.proficiencies.map(
                            proficiency =>
                            <tr key={proficiency.id}>
                                <td data-label="Name">{proficiency.name}</td>
                                <td data-label="Type">{proficiency.type}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
            </div>
        );
    }
}

export default ProficienciesListComponent;