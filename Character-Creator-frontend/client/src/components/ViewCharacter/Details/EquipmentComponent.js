import React from 'react';

const EquipmentComponent = ({info}) => {
 


    return (
        <div className="ui raised very padded text segment">
            <h4>Equipment:</h4>
            <table className="ui very basic collapsing celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subtype</th>
                        <th>Propeties</th>
                    </tr>
                </thead>
                <tbody>
                    {!info.equipment ? 
                        <tr>
                            <td>Loading...</td>
                        </tr> 
                    : info.equipment.map(equipment =>
                        <tr key={equipment.id}>
                            <td>{equipment.name}</td>
                            <td>{equipment.subtype}</td>
                            <td>{equipment.properties}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
                
    );
    
}

export default EquipmentComponent;