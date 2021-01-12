import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import validate from './validate';
import renderField from './renderField';
import OtherStatsService from '../../services/OtherStatsService';

const CreateCharacterFirstPage = props => {
    const [loading, setLoading] = useState(true);
    const [characterClasses, setCharacterClasses] = useState([]);
    const [selectedClass, setselectedClass] = useState({id: 0, className: "Loading"});
    const [characterRaces, setCharacterRaces] = useState([]);
    const [selectedRace, setselectedRace] = useState({id: 0, className: "Loading"});
    const [characterSubraces, setCharacterSubraces] = useState([{ label: "Loading ...", value: "" }]);
    const [selectedSubrace, setselectedSubrace] = useState('Select a subrace...');
    const [characterBackgrounds, setCharacterBackgrounds] = useState([{ name: "Loading ..." }]);
    const [selectedBackground, setselectedBackground] = useState('Select a background...');
    const [alignments, setAlignments] = useState([{ name: "Loading ..." }]);
    const [selectedAlignment, setselectedAlignment] = useState('Select a alignment...');
    const { handleSubmit } = props

    useEffect(() => {
        let unmounted = false;
        async function getCharacterInfo() {
            const responseClass = await OtherStatsService.getCharacterClasses()
            
            if (!unmounted) {
                setCharacterClasses(responseClass.data.map((characterClass) => ({ id: characterClass.id, name: characterClass.className, description:  characterClass.classDescription})));
                setLoading(false);
            }

            const responseRace = await OtherStatsService.getCharacterRaces()

            if (!unmounted) {
                setCharacterRaces(responseRace.data.map((characterRace) => ({ id: characterRace.id, name: characterRace.raceName, description:  characterRace.raceDescription})));
                setLoading(false);
            }

            const responseBackground = await OtherStatsService.getCharacterBackgrounds()

            if (!unmounted) {
                setCharacterBackgrounds(responseBackground.data.map((characterBackground) => ({ id: characterBackground.id, name: characterBackground.backgroundName, description:  characterBackground.backgroundDescription})));
                setLoading(false);
            }

            const responseAlignment = await OtherStatsService.getAlignments()

            if (!unmounted) {
                setAlignments(responseAlignment.data.map((alignment) => ({ id: alignment.id, name: alignment.alignment })));
                setLoading(false);
            }
        }
        getCharacterInfo();
        return () => {
            unmounted = true;
        }
        
    }, []);

    useEffect(() => {
        async function getSubraceInfo() {
            setCharacterSubraces([]);
            const responseSubrace = await OtherStatsService.getSubracesofRace(selectedRace.id)
            setCharacterSubraces(responseSubrace.data.map((characterSubrace) => ({ id: characterSubrace.id, name: characterSubrace.subraceName, description:  characterSubrace.subraceDescription })));
            setLoading(false);
        }
        getSubraceInfo()
    }, [selectedRace]);


    const renderSelector = ({ optionList, selectedOption, change, label, meta: {touched, error} }) => (
        <div className="field">
            
            <label>{label}</label>
            {touched && error && <span>{error}</span>}
            <select disabled={loading} value={selectedOption.name} onChange={e => change({id: e.target.options[e.target.options.selectedIndex].getAttribute("datakey"), name: e.currentTarget.value})}>
            <option>---</option>
            {optionList.map(option => (
                <option key={option.id + option.name} datakey={option.id} value={option.name}>
                    {option.name}
                </option>
            ))}
            
            </select>
            
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="ui form error">
            <Field name="name" component={renderField} label="Enter character name" />
            <Field optionList={characterClasses} selectedOption={selectedClass} change={setselectedClass} name="class" component={renderSelector} label="Choose a class" fieldName="className" />
            <Field optionList={characterRaces} selectedOption={selectedRace} change={setselectedRace} name="race" component={renderSelector} label="Choose a race" />
            <Field optionList={characterSubraces} selectedOption={selectedSubrace} change={setselectedSubrace} name="subrace" component={renderSelector} label="Choose a subrace (if exists)" />
            <Field optionList={characterBackgrounds} selectedOption={selectedBackground} change={setselectedBackground} name="background" component={renderSelector} label="Choose a background" />
            <Field optionList={alignments} selectedOption={selectedAlignment} change={setselectedAlignment} name="alignment" component={renderSelector} label="Choose an alignment" />

            <button className="ui button positive">Next</button>
            <Link to="/">
                <button style={{marginLeft: "10px"}} className="ui secondary button">
                    Back
                </button>
            </Link>
        </form>
    );
}

export default reduxForm({
    form: 'createCharacter',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  })(CreateCharacterFirstPage)