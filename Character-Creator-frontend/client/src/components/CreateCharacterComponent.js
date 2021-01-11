import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class CreateCharacterComponent extends Component {
    renderInput() {
        return (
            <div>Hi</div>
        );
    }

    render() {
        return (
            <form>
                <Field name="name" component={this.renderInput} />
                <Field name="class" component={this.renderInput} />
            </form>
        );
    }
}

export default reduxForm({
    form: 'characterCreate'
})(CreateCharacterComponent);