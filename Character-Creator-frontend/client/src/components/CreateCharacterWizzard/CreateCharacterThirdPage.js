import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import OtherStatsService from '../../services/OtherStatsService';
// import { Multiselect } from "multiselect-react-dropdown";
import Multiselect from 'react-widgets/lib/Multiselect';
import 'react-widgets/dist/css/react-widgets.css'


const CreateCharacterThirdPage = props => {
    const [loading, setLoading] = useState(true);
    const [personalityTraits, setPersonalityTraits] = useState([]);
    const [ideals, setIdeals] = useState([]);
    const [flaws, setFlaws] = useState([]);
    const [bonds, setBonds] = useState([]);
    const { handleSubmit, previousPage, selectedClass, selectedBackground  } = props;

    const equipmentData = selectedClass.equipment.concat(selectedBackground.equipment)




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

    const renderEquipment = ({ input, label, meta: {touched, error}, ...rest }) => 
    <div className="field">
    <label>{label}</label>
    {touched && error && <span>{error}</span>}
    <Multiselect {...input}
    showPlaceholderWithValues
    placeholder='name, properties'
    data={equipmentData}
    valueField='id'
    textField={equipment => equipment.name + ', ' + equipment.properties}
    onBlur={() => input.onBlur()} />
    </div>

        
        
    

    return (
        <form onSubmit={handleSubmit} className="ui form segment error">
            <Field optionList={personalityTraits} name="personalityTrait" component={renderSelector} label="Choose personality trait" fieldName="personalityTrait" />
            <Field optionList={ideals} name="ideal" component={renderSelector} label="Choose ideal" fieldName="ideal" />
            <Field optionList={flaws} name="flaw" component={renderSelector} label="Choose flaw" fieldName="flaw" />
            <Field optionList={bonds} name="bond" component={renderSelector} label="Choose bond" fieldName="bond" />

            <Field data={equipmentData} name="equipment" component={renderEquipment} label="Choose equipment (max 3)" fieldName="equipment" />
            

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