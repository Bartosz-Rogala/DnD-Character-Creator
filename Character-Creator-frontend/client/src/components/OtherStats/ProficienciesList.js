import React, { Component } from 'react';
import OtherStatsService from '../../services/OtherStatsService';

class ProficienciesList extends Component {
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
                    <tr>
                        <td data-label="Name">James</td>
                        <td data-label="Type">24</td>
                    </tr>
                    <tr>
                        <td data-label="Name">Jill</td>
                        <td data-label="Type">26</td>
                    </tr>
                    <tr>
                        <td data-label="Name">Elyse</td>
                        <td data-label="Type">24</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default ProficienciesList;