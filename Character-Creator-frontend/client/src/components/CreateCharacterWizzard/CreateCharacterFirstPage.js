import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import OtherStatsService from '../../services/OtherStatsService';

const CreateCharacterFirstPage = props => {
    const [loading, setLoading] = useState(true);
    const [characterClasses, setCharacterClasses] = useState([{ label: "Loading ...", value: "" }]);
    const [selectedClass, setselectedClass] = useState('Select a class...');
    const [characterRaces, setCharacterRaces] = useState([{ label: "Loading ...", value: "" }]);
    const [selectedRace, setselectedRace] = useState('Select a race...');
    const [characterBackgrounds, setCharacterBackgrounds] = useState([{ label: "Loading ...", value: "" }]);
    const [selectedBackground, setselectedBackground] = useState('Select a background...');
    const { handleSubmit } = props

    useEffect(() => {
        let unmounted = false;
        async function getCharacterInfo() {
            const responseClass = await OtherStatsService.getCharacterClasses()
            
            if (!unmounted) {
                setCharacterClasses(responseClass.data.map((characterClass) => ({ label: characterClass.className, value: characterClass.className })));
                setLoading(false);
            }

            const responseRace = await OtherStatsService.getCharacterRaces()

            if (!unmounted) {
                setCharacterRaces(responseRace.data.map((characterRace) => ({ label: characterRace.raceName, value: characterRace.raceName })));
                setLoading(false);
            }

            const responseBackground = await OtherStatsService.getCharacterBackgrounds()

            if (!unmounted) {
                setCharacterBackgrounds(responseBackground.data.map((characterBackground) => ({ label: characterBackground.backgroundName, value: characterBackground.backgroundName })));
                setLoading(false);
            }
        }
        getCharacterInfo();
        return () => {
            unmounted = true;
        }
        
    }, []);


    const renderSelector = ({ optionList, selectedOption, change, label, meta: {touched, error} }) => (
        <div className="field">
            
            <label>{label}</label>
            {touched && error && <span>{error}</span>}
            <select disabled={loading} value={selectedOption} onChange={e => change(e.currentTarget.value)}>
            <option>---</option>
            {optionList.map(optionList => (
                <option key={optionList.label} value={optionList.value}>
                    {optionList.value}
                </option>
            ))}
            
            </select>
            
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="ui form error">
            <Field name="name" component={renderField} label="Enter character name" />
            <Field optionList={characterClasses} selectedOption={selectedClass} change={setselectedClass} name="class" component={renderSelector} label="Choose a class" />
            <Field optionList={characterRaces} selectedOption={selectedRace} change={setselectedRace} name="race" component={renderSelector} label="Choose a race" />
            <Field name="subrace" component={renderField} label="Choose a subrace (if exists)" />
            <Field optionList={characterBackgrounds} selectedOption={selectedBackground} change={setselectedBackground} name="background" component={renderSelector} label="Choose a background" />
            <Field name="alignment" component={renderField} label="Choose an alignment" />

            <button className="ui button primary">Submit</button>
        </form>
    );
}

export default reduxForm({
    form: 'createCharacter',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  })(CreateCharacterFirstPage)