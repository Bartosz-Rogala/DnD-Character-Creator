import React, { Component } from 'react';
import OtherStatsService from '../../services/OtherStatsService';

class FlawListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            flaws: []
        }
    }

    componentDidMount() {
        OtherStatsService.getFlaws().then(res => {
            this.setState({ flaws: res.data })
        })

    }


    render() {
        return (
            <div>
                <h2 class="ui center aligned header">Flaws</h2>
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Flaw</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.flaws.map(
                            flaw =>
                            <tr key={flaw.id}>
                                <td data-label="Id">{flaw.id}</td>
                                <td data-label="Trait">{flaw.flaw}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        );
    }
}

export default FlawListComponent;