import React, { Component } from 'react';
import OtherStatsService from '../../services/OtherStatsService';

class CharacterBackgroundListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            backgrounds: []
        }
    }

    componentDidMount() {
        OtherStatsService.getCharacterBackgrounds().then(res => {
            this.setState({ backgrounds: res.data })
        })
    }

    render() {
        return (
            <div>
                <h2 className="ui message dnd center aligned header">Character Backgrounds</h2>
            <table className="ui dnd celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.backgrounds.map(
                            background =>
                            <tr key={background.id}>
                                <td data-label="Name">{background.backgroundName}</td>
                                <td data-label="Description">{background.backgroundDescription}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
            </div>
        );
    }
}

export default CharacterBackgroundListComponent;