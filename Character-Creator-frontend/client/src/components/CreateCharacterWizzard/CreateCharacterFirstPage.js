import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import validate from './validate';
import renderField from './renderField';
import OtherStatsService from '../../services/OtherStatsService';

const CreateCharacterFirstPage = props => {
    const [loading, setLoading] = useState(true);
    const [characterClasses, setCharacterClasses] = useState([]);
    const [characterRaces, setCharacterRaces] = useState([]);
    const [characterSubraces, setCharacterSubraces] = useState([{ label: "Loading ...", value: "" }]);
    const [characterBackgrounds, setCharacterBackgrounds] = useState([{ name: "Loading ..." }]);
    const [alignments, setAlignments] = useState([{ name: "Loading ..." }]);
    const { handleSubmit } = props

    useEffect(() => {
        let unmounted = false;
        async function getCharacterInfo() {
            const responseClass = await OtherStatsService.getCharacterClasses()
            
            if (!unmounted) {
                setCharacterClasses(responseClass.data.map((characterClass) => ({ id: characterClass.id, name: characterClass.className, description:  characterClass.classDescription, object: characterClass })));
                
                setLoading(false);
            }

            const responseRace = await OtherStatsService.getCharacterRaces()

            if (!unmounted) {
                setCharacterRaces(responseRace.data.map((characterRace) => ({ id: characterRace.id, name: characterRace.raceName, description:  characterRace.raceDescription, object:characterRace})));
                setLoading(false);
            }

            const responseBackground = await OtherStatsService.getCharacterBackgrounds()

            if (!unmounted) {
                setCharacterBackgrounds(responseBackground.data.map((characterBackground) => ({ id: characterBackground.id, name: characterBackground.backgroundName, description:  characterBackground.backgroundDescription, object: characterBackground})));
                setLoading(false);
            }

            const responseAlignment = await OtherStatsService.getAlignments()

            if (!unmounted) {
                setAlignments(responseAlignment.data.map((alignment) => ({ id: alignment.id, name: alignment.alignment, object: alignment })));
                setLoading(false);
            }
        }
        getCharacterInfo();
        return () => {
            unmounted = true;
        }
        
    }, []);

    const getSubraceInfo = async id => {
        setCharacterSubraces([]);
        const responseSubrace = await OtherStatsService.getSubracesofRace(id)
        setCharacterSubraces(responseSubrace.data.map((characterSubrace) => ({ id: characterSubrace.id, name: characterSubrace.subraceName, description:  characterSubrace.subraceDescription, object: characterSubrace })));
        setLoading(false);
        
    }

    const renderSelector = ({ input, optionList, label, meta: {touched, error} }) => (
        <div className="field">
            
            <label>{label}</label>
            {touched && error && <span>{error}</span>}
            <select {...input} disabled={loading}>
            <option>-</option>
            {optionList.map(option => (
                <option key={option.id + option.name} datakey={option.id} value={JSON.stringify(option.object)}>
                    {option.name}
                </option>
            ))}
            
            </select>
            
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="ui form segment error">
            <Field name="name" component={renderField} label="Enter character name" />
            <Field optionList={characterClasses} name="class" component={renderSelector} label="Choose a class" fieldName="className" />
            <Field optionList={characterRaces} onChange={(e) => getSubraceInfo(e.target.options[e.target.options.selectedIndex].getAttribute("datakey"))} name="race" component={renderSelector} label="Choose a race" />
            <Field optionList={characterSubraces} name="subrace" component={renderSelector} label="Choose a subrace (if exists)" />
            <Field optionList={characterBackgrounds} name="background" component={renderSelector} label="Choose a background" />
            <Field optionList={alignments} name="alignment" component={renderSelector} label="Choose an alignment" />

            <button className="ui button positive">Next</button>
            <Link to="/">
                <button style={{marginLeft: "10px"}} className="ui secondary button">
                    Cancel
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