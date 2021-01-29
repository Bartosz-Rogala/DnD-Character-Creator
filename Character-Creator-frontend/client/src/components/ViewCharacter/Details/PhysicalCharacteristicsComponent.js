import React from 'react';

const PhysicalCharacteristicsComponent = ({info}) => {

    return (
        <div className="dnd ui raised very padded text segment">
            <h4>Physical Characteristics:</h4>
            <table className="ui very basic collapsing celled table">
                <tbody>
                    <tr>
                        <td>Age</td>
                        <td>{info.age}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>{info.height}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{info.weight}</td>
                    </tr>
                    <tr>
                        <td>Eyes</td>
                        <td>{info.eyes}</td>
                    </tr>
                    <tr>
                        <td>Skin</td>
                        <td>{info.skin}</td>
                    </tr>
                    <tr>
                        <td>Hair</td>
                        <td>{info.hair}</td>
                    </tr>
                </tbody>
            </table>
        </div>
                
    );
    
}

export default PhysicalCharacteristicsComponent;