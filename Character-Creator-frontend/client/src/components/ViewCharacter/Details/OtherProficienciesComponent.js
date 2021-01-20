import React from 'react';

const OtherProficienciesComponent = ({info}) => {


    const ListProficiency = ({type, proficiencySource}) => {
        if(!proficiencySource) {
            return null;
        } else {
            return (
                proficiencySource.otherProficiencies.map(proficiency =>
                proficiency.type === type ? proficiency.name + ", " : '')
            );
        }
    }
 
    if (!info) {
        return (
            <div className="ui raised very padded text segment">
            <h4>Other Proficiencies:</h4>
            <div>Loading...</div>
            </div>
        );
    } else {
        return (
            <div className="ui raised very padded text segment">
                <h4>Other Proficiencies:</h4>

                <table className="ui very basic collapsing celled table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Armor</td>
                                <td>
                                    <ListProficiency type={'Armor'} proficiencySource={info.characterClass} />
                                    <ListProficiency type={'Armor'} proficiencySource={info.characterRace} />
                                    <ListProficiency type={'Armor'} proficiencySource={info.characterSubrace} />
                                </td>
                        </tr>
                        <tr>
                            <td>Weapons</td>
                                <td>
                                    <ListProficiency type={'Weapon'} proficiencySource={info.characterClass} />
                                    <ListProficiency type={'Weapon'} proficiencySource={info.characterRace} />
                                    <ListProficiency type={'Weapon'} proficiencySource={info.characterSubrace} />
                                </td>
                        </tr>
                        <tr>
                            <td>Tool</td>
                                <td>
                                    <ListProficiency type={'Tool'} proficiencySource={info.characterClass} />
                                    <ListProficiency type={'Tool'} proficiencySource={info.characterRace} />
                                    <ListProficiency type={'Tool'} proficiencySource={info.characterSubrace} />
                                </td>
                        </tr>
                        <tr>
                            <td>Other</td>
                                <td>
                                    <ListProficiency type={'Other'} proficiencySource={info.characterClass} />
                                    <ListProficiency type={'Other'} proficiencySource={info.characterRace} />
                                    <ListProficiency type={'Other'} proficiencySource={info.characterSubrace} />
                                </td>
                        </tr>
                    </tbody>
                </table>
    
    
            </div>
                    
        );
    }

}

export default OtherProficienciesComponent;