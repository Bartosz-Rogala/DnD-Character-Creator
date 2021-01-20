import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import OtherStatsService from '../../services/OtherStatsService';
// import { Multiselect } from "multiselect-react-dropdown";
import Multiselect from 'react-widgets/lib/Multiselect';
import 'react-widgets/dist/css/react-widgets.css';


const CreateCharacterThirdPage = props => {
    const [loading, setLoading] = useState(true);
    const [personalityTraits, setPersonalityTraits] = useState([]);
    const [ideals, setIdeals] = useState([]);
    const [flaws, setFlaws] = useState([]);
    const [bonds, setBonds] = useState([]);
    const [languages, setLangauges] = useState([]);
    const [equipment, setEquipment] = useState([]);


    const { handleSubmit, previousPage, selectedClass, selectedBackground, selectedRace  } = props;




    useEffect(() => {
        let unmounted = false;
        async function getInfo() {
            const responsePersonality = await OtherStatsService.getPersonalityTraits()
            
            if (!unmounted) {
                setPersonalityTraits(responsePersonality.data.map((personalityTrait) => ({ id: personalityTrait.id, value: personalityTrait.trait })));
                setLoading(false);
            }

            const responseIdeal = await OtherStatsService.getIdeals()

            if (!unmounted) {
                setIdeals(responseIdeal.data.map((ideal) => ({ id: ideal.id, value: ideal.ideal })));
                setLoading(false);
            }

            const responseFlaw = await OtherStatsService.getFlaws()

            if (!unmounted) {
                setFlaws(responseFlaw.data.map((flaw) => ({ id: flaw.id, value: flaw.flaw })));
                setLoading(false);
            }

            const responseBonds = await OtherStatsService.getBonds()

            if (!unmounted) {
                setBonds(responseBonds.data.map((bond) => ({ id: bond.id, value: bond.bond })));
                setLoading(false);
            }

            const responseLanguages = await OtherStatsService.getLanguages()

            if (!unmounted) {
                setLangauges(responseLanguages.data.map((language) =>  language ));
                setLoading(false);
            }

            const responseEquipment = await OtherStatsService.getEquipment()

            if (!unmounted) {
                setEquipment(responseEquipment.data.map((equipment) =>  equipment ));
                setLoading(false);
            }

        }
        
        getInfo();
        return () => {
            unmounted = true;
        }
        
    }, []);


    const renderSelector = ({ input, optionList, label, meta: {touched, error} }) => (
        <div className="field">
            
            <label>{label}</label>
            {touched && error && <span>{error}</span>}
            <select {...input} disabled={loading}>
            <option>---</option>
            {optionList.map(option => (
                <option key={option.id} value={option.value}>
                    {option.value}
                </option>
            ))}
            
            </select>
            
        </div>
    );

    const renderMultiselect = ({ input, placeholder, shownText, group, label, meta: {touched, error}, ...rest }) => 
    
    <div className="field">
    <label>{label}</label>
    {touched && error && <span>{error}</span>}
    <Multiselect 
    {...input}
    value={input.value || []}
    showPlaceholderWithValues
    groupBy={group}
    placeholder={placeholder}
    textField={shownText}
    onBlur={() => input.onBlur()}
    {...rest}
    />
    </div>
        
        
    

    return (
        <form onSubmit={handleSubmit} className="ui form segment error">
            <Field optionList={personalityTraits} name="personalityTrait" component={renderSelector} label="Choose personality trait" fieldName="personalityTrait" />
            <Field optionList={ideals} name="ideal" component={renderSelector} label="Choose ideal" fieldName="ideal" />
            <Field optionList={flaws} name="flaw" component={renderSelector} label="Choose flaw" fieldName="flaw" />
            <Field optionList={bonds} name="bond" component={renderSelector} label="Choose bond" fieldName="bond" />

            <Field 
                data={equipment}  
                name="equipment"
                group='subtype'
                placeholder='name, properties, subtype'
                shownText={equipment => equipment.name + ', ' + equipment.properties + ', ' + equipment.subtype}
                component={renderMultiselect} 
                label="Choose equipment - consult Player's Handbook to choose proper equipment"
            />
            
            <Field 
                data={selectedClass.skills} 
                name="classSkills" 
                group='type'
                placeholder='name, type'
                shownText={skill => skill.name + ', ' + skill.type}
                component={renderMultiselect} 
                label={"Choose class skills (max " + selectedClass.maxSkills + ")"}  
            />

            <Field 
                data={selectedBackground.skills} 
                name="backgroundSkills" 
                group='type'
                placeholder='name, type'
                shownText={skill => skill.name + ', ' + skill.type}
                component={renderMultiselect} 
                label="Choose background skills (You can select all of them ;) )"
            />

            <div className="ui compact message">
                <h4>Languages already known (based on race):</h4>
                {selectedRace.languages.map(language =>
                <div key={language.id}>
                    {language.languageName}
                </div>)}
            </div>
            
            <Field 
                data={languages} 
                name="backgroundLanguages" 
                group=''
                placeholder='language name'
                shownText='languageName'
                component={renderMultiselect} 
                label={"Choose languages based on background (max " + selectedBackground.maxLanguages + ")"}
            />

            




            <button className="ui button positive">
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
  })(CreateCharacterThirdPage)