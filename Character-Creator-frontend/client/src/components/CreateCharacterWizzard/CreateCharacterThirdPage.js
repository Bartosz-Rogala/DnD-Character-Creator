import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const CreateCharacterThirdPage = props => {
    const { handleSubmit, pristine, submitting } = props

    return (
        <form onSubmit={handleSubmit} className="ui form error">
            <Field name="name3" component={renderField} label="Enter name" />
            <Field name="class3" component={renderField} label="Choose class" />

            <button className="ui button primary" disabled={pristine || submitting}>Submit</button>
        </form>
    );
}

export default reduxForm({
    form: 'createCharacter',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  })(CreateCharacterThirdPage)