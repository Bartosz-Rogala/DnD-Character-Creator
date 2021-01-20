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

    if(!formValues.background) {
        errors.background = 'You must pick a background';
    }

    if(!formValues.alignment) {
        errors.alignment = 'You must pick a alignment';
    }

    if(!formValues.strength) {
        errors.strength = 'You must choose strength';
    }

    if(!formValues.dexterity) {
        errors.dexterity = 'You must choose dexterity';
    }

    if(!formValues.constitution) {
        errors.constitution = 'You must choose constitution';
    }

    if(!formValues.intelligence) {
        errors.intelligence = 'You must choose intelligence';
    }

    if(!formValues.wisdom) {
        errors.wisdom = 'You must choose wisdom';
    }

    if(!formValues.charisma) {
        errors.charisma = 'You must choose charisma';
    }

    if(!formValues.personalityTrait) {
        errors.personalityTrait = 'You must choose personalityTrait';
    }

    if(!formValues.ideal) {
        errors.ideal = 'You must choose ideal';
    }

    if(!formValues.flaw) {
        errors.ideal = 'You must choose ideal';
    }

    if(!formValues.bond) {
        errors.ideal = 'You must choose ideal';
    }



    return errors;
}

export default validate;