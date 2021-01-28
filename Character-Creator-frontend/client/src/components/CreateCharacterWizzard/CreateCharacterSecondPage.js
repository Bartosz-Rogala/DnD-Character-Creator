import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
const numberArray =[15,14,13,12,10,8];

const CreateCharacterSecondPage = (props) => {
    const [selectedStrength, setSelectedStrength] = useState(0);
    const [selectedDexterity, setSelectedDexterity] = useState(0);
    const [selectedConstitution, setSelectedConstitution] = useState(0);
    const [selectedIntelligence, setSelectedIntelligence] = useState(0);
    const [selectedWisdom, setSelectedWisdom] = useState(0);
    const [selectedCharisma, setSelectedCharisma] = useState(0);
    const { handleSubmit, previousPage, selectedRace, selectedSubrace } = props


    const renderSelector = ({ input, selectedOption, label, meta: {touched, error} }) => (
        <div className="field">
            
            <label>{label}</label>
            {touched && error && <span>{error}</span>}
            <select {...input} >
            
            <option>-</option>
            {numberArray.filter((chosen) => {
                    return ((
                        chosen !== selectedStrength &&
                        chosen !== selectedDexterity &&
                        chosen !== selectedConstitution &&
                        chosen !== selectedIntelligence &&
                        chosen !== selectedWisdom &&
                        chosen !== selectedCharisma) ||
                         selectedOption === chosen);


                }).map(number => (
                <option key={number} value={number}>
                    {number}
                </option>
            ))}
            
            </select>
            
        </div>
    )


    const AbilityModifier = ({ability, raceBonus, subraceBonus}) => {
        if (!subraceBonus) {
            subraceBonus = 0;
        }
        if (ability === 0) {
            return (
                <div>
                    0 + {raceBonus} + {subraceBonus} = {raceBonus+subraceBonus}
                </div>
            );
        } else {
            return (
                <div>
                    {Math.round((ability-10.5)/2)} + {raceBonus} + {subraceBonus} = <b>{Math.round((ability-10.5)/2)+raceBonus+subraceBonus}</b>
                </div>
            );
        }
    }

    return (
        <form onSubmit={handleSubmit} className="ui form segment error">
            <h2 className="ui center aligned icon header">
                <i className="edit icon"></i>
                <div className="content">
                    Choose your abilities
                    <div className="sub header">
                    <br></br>
                        Don't be scared! It's a simple equation: 
                        <br></br>
                        <br></br>
                        Score + Race Bonus + Subrace Bonus = Ability Modifier
                    </div>
                </div>
            </h2>


            <div className="ui mini form">
                <div className="two fields">
                    <div className="field left">
                        <label>Strength modifier</label>
                        <AbilityModifier ability={selectedStrength} raceBonus={selectedRace.strengthBonus} subraceBonus={selectedSubrace.strengthBonus} />
                    </div>
                    <div className="field">
                        <Field name="strength" selectedOption={selectedStrength} onChange={e => setSelectedStrength(parseInt(e.currentTarget.value))} component={renderSelector} label="Strength" />
                    </div>
                </div>
            </div>

            <div className="ui mini form">
                <div className="two fields">
                    <div className="field left">
                        <label>Dexterity modifier</label>
                        <AbilityModifier ability={selectedDexterity} raceBonus={selectedRace.dexterityBonus} subraceBonus={selectedSubrace.dexterityBonus} />
                    </div>
                    <div className="field">
                        <Field name="dexterity" selectedOption={selectedDexterity} onChange={e => setSelectedDexterity(parseInt(e.currentTarget.value))} component={renderSelector} label="Dexterity" />
                    </div>
                </div>
            </div>

            <div className="ui mini form">
                <div className="two fields">
                    <div className="field left">
                        <label>Constitution modifier</label>
                        <AbilityModifier ability={selectedConstitution} raceBonus={selectedRace.constitutionBonus} subraceBonus={selectedSubrace.constitutionBonus} />
                    </div>
                    <div className="field">
                        <Field name="constitution" selectedOption={selectedConstitution} onChange={e => setSelectedConstitution(parseInt(e.currentTarget.value))} component={renderSelector} label="Constitution" />
                    </div>
                </div>
            </div>

            <div className="ui mini form">
                <div className="two fields">
                    <div className="field left">
                        <label>Intelligence modifier</label>
                        <AbilityModifier ability={selectedIntelligence} raceBonus={selectedRace.intelligenceBonus} subraceBonus={selectedSubrace.intelligenceBonus} />
                    </div>
                    <div className="field">
                        <Field name="intelligence" selectedOption={selectedIntelligence} onChange={e => setSelectedIntelligence(parseInt(e.currentTarget.value))} component={renderSelector} label="Intelligence" />
                    </div>
                </div>
            </div>

            <div className="ui mini form">
                <div className="two fields">
                    <div className="field left">
                        <label>Wisdom modifier</label>
                        <AbilityModifier ability={selectedWisdom} raceBonus={selectedRace.wisdomBonus} subraceBonus={selectedSubrace.wisdomBonus} />
                    </div>
                    <div className="field">
                        <Field name="wisdom" selectedOption={selectedWisdom} onChange={e => setSelectedWisdom(parseInt(e.currentTarget.value))} component={renderSelector} label="Wisdom" />
                    </div>
                </div>
            </div>

            <div className="ui mini form">
                <div className="two fields">
                    <div className="field left">
                        <label>Charisma modifier</label>
                        <AbilityModifier ability={selectedCharisma} raceBonus={selectedRace.charismaBonus} subraceBonus={selectedSubrace.charismaBonus} />
                    </div>
                    <div className="field">
                        <Field name="charisma" selectedOption={selectedCharisma} onChange={e => setSelectedCharisma(parseInt(e.currentTarget.value))} component={renderSelector} label="Charisma" />
                    </div>
                </div>
            </div>
            

            <button className="ui button DnDpositive">
                Next
            </button>
            <button style={{marginLeft: "10px"}} type="button" className="ui button secondary" onClick={previousPage}>
                Previous
            </button>
            
        </form>
    );
}

export default reduxForm({
    form: 'createCharacter',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  })(CreateCharacterSecondPage)