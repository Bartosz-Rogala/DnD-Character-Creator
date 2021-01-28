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
                <h2 className="ui message dnd center aligned header">Flaws</h2>
            <table className="ui dnd celled table">
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