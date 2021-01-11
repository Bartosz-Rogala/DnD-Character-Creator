import React, { Component } from 'react';
import OtherStatsService from '../../services/OtherStatsService';

class LanguagesListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            languages: []
        }
    }

    componentDidMount() {
        OtherStatsService.getLanguages().then(res => {
            this.setState({ languages: res.data })
        })
    }


    render() {
        return (
            <div>
                <h2 class="ui center aligned header">Languages</h2>
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Language Name</th>
                        <th>Script</th>
                        <th>Typical Speaker</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.languages.map(
                            language =>
                            <tr key={language.id}>
                                <td data-label="Name">{language.languageName}</td>
                                <td data-label="Type">{language.script}</td>
                                <td data-label="Type">{language.typicalSpeaker}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
            </div>
        );
    }
}

export default LanguagesListComponent;