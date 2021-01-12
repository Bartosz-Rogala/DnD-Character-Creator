const validate = formValues => {
    const errors = {};

    if(!formValues.name) {
        errors.name = 'You must enter the name';
    }

    return errors;
}

export default validate;