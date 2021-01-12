import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const CreateCharacterSecondPage = props => {
    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit} className="ui form error">
            <Field name="name2" component={renderField} label="Enter name" />
            <Field name="class2" component={renderField} label="Choose class" />

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