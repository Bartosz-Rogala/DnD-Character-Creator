import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
const numberArray =[15,14,13,12,10,8];

const CreateCharacterSecondPage = props => {
    const [selectedStrength, setSelectedStrength] = useState(0);
    const [selectedDexterity, setSelectedDexterity] = useState(0);
    const [selectedConstitution, setSelectedConstitution] = useState(0);
    const [selectedIntelligence, setSelectedIntelligence] = useState(0);
    const [selectedWisdom, setSelectedWisdom] = useState(0);
    const [selectedCharisma, setSelectedCharisma] = useState(0);
    const { handleSubmit } = props

    useEffect(() => {
        console.log(selectedStrength);
    });

    const renderSelector = ({ selectedOption, change, label, meta: {touched, error} }) => (
        <div className="field">
            
            <label>{label}</label>
            {touched && error && <span>{error}</span>}
            <select value={selectedOption} onChange={e => change(parseInt(e.currentTarget.value))}>
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

    return (
        <form onSubmit={handleSubmit} className="ui form error">
            <div className="ui mini form">
                <div className="two fields">
                    <div className="two wide field">
                        <label>Strength modifier</label>
                        <div>{selectedStrength}</div>
                    </div>
                    <div className="four wide field">
                        <Field name="strength" selectedOption={selectedStrength} change={setSelectedStrength} component={renderSelector} label="Strength" />
                    </div>
                </div>
            </div>

            <div className="ui mini form">
                <div className="two fields">
                    <div className="two wide field">
                        <label>Dexterity modifier</label>
                        <div>Hello</div>
                    </div>
                    <div className="four wide field">
                        <Field name="dexterity" selectedOption={selectedDexterity} change={setSelectedDexterity} component={renderSelector} label="Dexterity" />
                    </div>
                </div>
            </div>

            <div className="ui mini form">
                <div className="two fields">
                    <div className="two wide field">
                        <label>Constitution modifier</label>
                        <div>Hello</div>
                    </div>
                    <div className="four wide field">
                        <Field name="constitution" selectedOption={selectedConstitution} change={setSelectedConstitution} component={renderSelector} label="Constitution" />
                    </div>
                </div>
            </div>

            <div className="ui mini form">
                <div className="two fields">
                    <div className="two wide field">
                        <label>Intelligence modifier</label>
                        <div>Hello</div>
                    </div>
                    <div className="four wide field">
                        <Field name="intelligence" selectedOption={selectedIntelligence} change={setSelectedIntelligence} component={renderSelector} label="Intelligence" />
                    </div>
                </div>
            </div>

            <div className="ui mini form">
                <div className="two fields">
                    <div className="two wide field">
                        <label>Wisdom modifier</label>
                        <div>Hello</div>
                    </div>
                    <div className="four wide field">
                        <Field name="wisdom" selectedOption={selectedWisdom} change={setSelectedWisdom} component={renderSelector} label="Wisdom" />
                    </div>
                </div>
            </div>

            <div className="ui mini form">
                <div className="two fields">
                    <div className="two wide field">
                        <label>Charisma modifier</label>
                        <div>Hello</div>
                    </div>
                    <div className="four wide field">
                        <Field name="charisma" selectedOption={selectedCharisma} change={setSelectedCharisma} component={renderSelector} label="Charisma" />
                    </div>
                </div>
            </div>

            <button className="ui button primary">Submit</button>
        </form>
    );
}

export default reduxForm({
    form: 'createCharacter',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  })(CreateCharacterSecondPage)