const validate = formValues => {
    const errors = {};

    if(!formValues.name) {
        errors.name = 'You must enter the name';
    }

    if(!formValues.class) {
        errors.class = 'You must pick a class';
    }

    if(!formValues.race) {
        errors.race = 'You must pick a race';
    }

    if(!formValues.subrace) {
        errors.subrace = 'You must pick a subrace';
    }

    if(!formValues.background) {
        errors.background = 'You must pick a background';
    }

    if(!formValues.alignment) {
        errors.alignment = 'You must pick a alignment';
    }


    return errors;
}

export default validate;