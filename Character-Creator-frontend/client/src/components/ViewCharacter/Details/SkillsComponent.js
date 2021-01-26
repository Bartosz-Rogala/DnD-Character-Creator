import React from 'react';

const SkillsComponent = ({info}) => {
 


    return (
        <div className="ui raised very padded text segment">
            <h4>Skills:</h4>
            <table className="ui very basic collapsing celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {!info.skills ? 
                        <tr>
                            <td>Loading...</td>
                        </tr> 
                    : info.skills.map(skills =>
                        <tr key={skills.id}>
                            <td>{skills.name}</td>
                            <td>{skills.type}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
                
    );
    
}

export default SkillsComponent;