import React, { Component } from 'react';
import OtherStatsService from '../../services/OtherStatsService';

class BondListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bonds: []
        }
    }

    componentDidMount() {
        OtherStatsService.getBonds().then(res => {
            this.setState({ bonds: res.data })
        })
    }

    render() {
        return (
            <div>
                <h2 className="ui center aligned header">Bonds</h2>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Bond</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.bonds.map(
                            bond =>
                            <tr key={bond.id}>
                                <td data-label="Id">{bond.id}</td>
                                <td data-label="Bond">{bond.bond}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
            </div>
        );
    }
}

export default BondListComponent;