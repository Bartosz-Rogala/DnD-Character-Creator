import React from 'react';

const BasicInformation = ({info}) => {

    return (
        <div className="dnd ui raised very padded text segment">
            <h4>Basic Information:</h4>
            <table className="ui very basic collapsing celled table">
                <tbody>
                    <tr>
                        <td>Character Name</td>
                        <td><h3>{info.character.characterName}</h3></td>
                    </tr>
                    <tr>
                        <td>Player Name</td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>Class</td>
                        <td>{info.characterClass.className}</td>
                    </tr>
                    <tr>
                        <td>Race</td>
                        <td>{info.characterRace.raceName}</td>
                    </tr>
                    <tr>
                        <td>Subrace</td>
                        <td>{!info.characterSubrace ? '---' : info.characterSubrace.subraceName}</td>
                    </tr>
                    <tr>
                        <td>Background</td>
                        <td>{info.characterBackground.backgroundName}</td>
                    </tr>
                    <tr>
                        <td>Alignment</td>
                        <td>{info.alignment.alignment}</td>
                    </tr>
                </tbody>
            </table>
        </div>
                
    );
    
}

export default BasicInformation;