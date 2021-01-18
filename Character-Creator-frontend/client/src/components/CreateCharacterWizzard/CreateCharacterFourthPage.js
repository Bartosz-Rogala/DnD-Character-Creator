import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const CreateCharacterFourthPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props

    const renderTextArea = ({ input, label, meta: {touched, error} }) => (
    
        <div className="field">
            <label>{label}</label>
            {touched && error && <span>{error}</span>}
            <textarea {...input} />
            
        </div>
        
    )

    return (
        <form onSubmit={handleSubmit} className="ui form segment error">
            <div className="ui mini form">
                <div className="three fields">
                    <div className="field">
                        <Field name="age" component={renderField} label="Enter character age" />
                    </div>
                    <div className="field">
                        <Field name="height" component={renderField} label="Enter character height" />
                    </div>
                    <div className="field">
                        <Field name="weight" component={renderField} label="Enter character weight" />
                    </div>
                </div>
            </div>
            <div className="ui mini form">
                <div className="three fields">
                    <div className="field">
                        <Field name="eyes" component={renderField} label="Enter character eyes" />
                    </div>
                    <div className="field">
                        <Field name="skin" component={renderField} label="Enter character skin" />
                    </div>
                    <div className="field">
                        <Field name="hair" component={renderField} label="Enter character hair" />
                    </div>
                </div>
            </div>

            <div className="ui mini form">
                <div className="two fields">
                    <div className="field">
                        <Field name="alliesAndOrganisations" component={renderTextArea} label="Enter your character's allies and organisations" />
                    </div>
                    <div className="field">
                        <Field name="characterBackstory" component={renderTextArea} label="Enter backstory of your character (max. 720 characters)" />
                    </div>
                </div>
            </div>

            <div className="ui mini form">
                <div className="two fields">
                    <div className="field">
                        <Field name="additionalFeaturesAndTraits" component={renderTextArea} label="Enter additional features and traits" />
                    </div>
                    <div className="field">
                        <Field name="treasure" component={renderTextArea} label="Enter your character's treasure" />
                    </div>
                </div>
            </div>

            <button type="submit" disabled={pristine || submitting} className="ui button primary">
                Submit
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
  })(CreateCharacterFourthPage)