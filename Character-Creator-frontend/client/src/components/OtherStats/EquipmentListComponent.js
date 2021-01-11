import React, { Component } from 'react';
import OtherStatsService from '../../services/OtherStatsService';

class EquipmentListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            equipment: []
        }
    }

    componentDidMount() {
        OtherStatsService.getEquipment().then(res => {
            this.setState({ equipment: res.data })
        })

    }


    render() {
        return (
            <div>
                <h2 class="ui center aligned header">Equipment</h2>
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Subtype</th>
                        <th>Armor class</th>
                        <th>Damage</th>
                        <th>Damage type</th>
                        <th>Properties</th>
                        <th>Required strength</th>
                        <th>Stealth disadvantage</th>
                        <th>Weight</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.equipment.map(
                            equipment =>
                            <tr key={equipment.id}>
                                <td data-label="name">{equipment.name}</td>
                                <td data-label="type">{equipment.type}</td>
                                <td data-label="subtype">{equipment.subtype}</td>
                                <td data-label="armorClass">{equipment.armorClass}</td>
                                <td data-label="damage">{equipment.damage}</td>
                                <td data-label="damageType">{equipment.damageType}</td>
                                <td data-label="properties">{equipment.properties}</td>
                                <td data-label="requiredStrength">{equipment.requiredStrength}</td>
                                <td data-label="stealthDisadvantage">{equipment.stealthDisadvantage}</td>
                                <td data-label="weight">{equipment.weight}</td>
                                <td data-label="cost">{equipment.cost}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
            </div>
        );
    }
}

export default EquipmentListComponent;