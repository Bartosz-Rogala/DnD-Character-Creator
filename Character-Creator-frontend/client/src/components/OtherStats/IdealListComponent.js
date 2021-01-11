import React, { Component } from 'react';
import OtherStatsService from '../../services/OtherStatsService';

class IdealListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ideals: []
        }
    }

    componentDidMount() {
        OtherStatsService.getIdeals().then(res => {
            this.setState({ ideals: res.data })
        })

    }

    render() {
        return (
            <div>
                <h2 class="ui center aligned header">Ideals</h2>
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Ideal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.ideals.map(
                            ideal =>
                            <tr key={ideal.id}>
                                <td data-label="Id">{ideal.id}</td>
                                <td data-label="Trait">{ideal.ideal}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        );
    }
}

export default IdealListComponent;