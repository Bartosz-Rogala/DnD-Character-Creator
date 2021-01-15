import React from 'react';

const AbilitiesComponent = ({info}) => {

    return (
        <div className="ui raised very padded text segment">
            <h4>Abilites:</h4>
            <table className="ui very basic collapsing celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Modifier</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Strength</td>
                        <td></td>
                        <td>{info.strength}</td>
                    </tr>
                    <tr>
                        <td>Dexterity</td>
                        <td></td>
                        <td>{info.dexterity}</td>
                    </tr>
                    <tr>
                        <td>Constitution</td>
                        <td></td>
                        <td>{info.constitution}</td>
                    </tr>
                    <tr>
                        <td>Intelligence</td>
                        <td></td>
                        <td>{info.intelligence}</td>
                    </tr>
                    <tr>
                        <td>Wisdom</td>
                        <td></td>
                        <td>{info.wisdom}</td>
                    </tr>
                    <tr>
                        <td>Charisma</td>
                        <td></td>
                        <td>{info.charisma}</td>
                    </tr>
                </tbody>
            </table>
        </div>
                
    );
    
}

export default AbilitiesComponent;