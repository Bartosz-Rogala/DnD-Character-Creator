const validate = (formValues, selected) => {
    const errors = {};

    if(!formValues.name) {
        errors.name = 'You must enter the name';
    }

    if(!formValues.class || formValues.class === '-') {
        errors.class = 'You must pick a class';
    }

    if(!formValues.race || formValues.race === '-') {
        errors.race = 'You must pick a race';
    }

    if(!formValues.background || formValues.background === '-') {
        errors.background = 'You must pick a background';
    }

    if(!formValues.alignment || formValues.alignment === '-') {
        errors.alignment = 'You must pick a alignment';
    }

    if(!formValues.strength || formValues.strength === '-') {
        errors.strength = 'You must choose strength';
    }

    if(!formValues.dexterity || formValues.dexterity === '-') {
        errors.dexterity = 'You must choose dexterity';
    }

    if(!formValues.constitution || formValues.constitution === '-') {
        errors.constitution = 'You must choose constitution';
    }

    if(!formValues.intelligence || formValues.intelligence === '-') {
        errors.intelligence = 'You must choose intelligence';
    }

    if(!formValues.wisdom || formValues.wisdom === '-') {
        errors.wisdom = 'You must choose wisdom';
    }

    if(!formValues.charisma || formValues.charisma === '-') {
        errors.charisma = 'You must choose charisma';
    }

    if(!formValues.personalityTrait  || formValues.personalityTrait === '-') {
        errors.personalityTrait = 'You must choose personalityTrait';
    }

    if(!formValues.ideal || formValues.ideal === '-') {
        errors.ideal = 'You must choose ideal';
    }

    if(!formValues.flaw || formValues.flaw === '-') {
        errors.flaw = 'You must choose flaw';
    }

    if(!formValues.bond || formValues.bond === '-') {
        errors.bond = 'You must choose bond';
    }

    if(formValues.classSkills) {
        if(formValues.classSkills.length > JSON.parse(formValues.class).maxSkills) {
            errors.classSkills = 'You chose too many skills';
        }
    }

    if(formValues.backgroundLanguages) {
        if(formValues.backgroundLanguages.length > JSON.parse(formValues.background).maxLanguages) {
            errors.backgroundLanguages = 'You chose too many languages';
        }
    }



    return errors;
}

export default validate;