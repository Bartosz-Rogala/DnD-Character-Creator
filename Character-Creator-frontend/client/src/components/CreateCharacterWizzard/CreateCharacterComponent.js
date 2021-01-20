import React, { Component } from 'react';
import CharacterService from '../../services/CharacterService';
import CreateCharacterFirstPage from './CreateCharacterFirstPage';
import CreateCharacterSecondPage from './CreateCharacterSecondPage';
import CreateCharacterThirdPage from './CreateCharacterThirdPage';
import CreateCharacterFourthPage from './CreateCharacterFourthPage';

class CreateCharacterComponent extends Component {
    constructor(props) {
        super(props)
        this.toSecondPage = this.toSecondPage.bind(this)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
          page: 1,
          race: {},
          subrace: {},
          class: {},
          background: {}
        }

    }

    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }
    
    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    toSecondPage(formValues) {
        this.setState({ page: this.state.page + 1 })
        this.setState({ race: JSON.parse(formValues.race) })
        if(formValues.subrace) {
            this.setState({ subrace: JSON.parse(formValues.subrace) })
        }
        this.setState({ class: JSON.parse(formValues.class) })
        this.setState({ background: JSON.parse(formValues.background) })
        
    }

    

    onSubmit = (formValues) => {

        

        let character = {
            additionalFeaturesAndTraits: formValues.additionalFeaturesAndTraits, 
            age: formValues.age, 
            alignment: JSON.parse(formValues.alignment),
            alliesAndOrganisations: formValues.alliesAndOrganisations,
            characterBackground: JSON.parse(formValues.background),
            bond: formValues.bond,
            characterBackstory: formValues.characterBackstory,
            charisma: formValues.charisma,
            characterClass: JSON.parse(formValues.class),
            constitution: formValues.constitution,
            dexterity: formValues.dexterity,
            eyes: formValues.eyes,
            equipment: formValues.equipment,
            flaw: formValues.flaw,
            hair: formValues.hair,
            height: formValues.height,
            ideal: formValues.ideal,
            intelligence: formValues.intelligence,
            characterName: formValues.name,
            personalityTrait: formValues.personalityTrait,
            characterRace: JSON.parse(formValues.race),
            skills: formValues.classSkills.concat(formValues.backgroundSkills),
            skin: formValues.skin,
            strength: formValues.strength,
            treasure: formValues.treasure,
            weight: formValues.weight,
            wisdom: formValues.wisdom,
            };

            if(formValues.subrace) {
                character['characterSubrace'] = JSON.parse(formValues.subrace)
            }

            if(formValues.backgroundLanguages) {
                character['languages'] = formValues.backgroundLanguages.concat(this.state.race.languages)
                
            } else {
                character['languages'] = this.state.race.languages
                
            }


        CharacterService.createCharacter(character).then(res =>{
            this.props.history.push(`successful_create/${res.data.id}`)
            
        })

    }


    render() {
        const { page } = this.state
        return (
            <div>
                {page === 1 && 
                    <CreateCharacterFirstPage 
                        onSubmit={this.toSecondPage}
                    />}
                {page === 2 && (
                    <CreateCharacterSecondPage
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                        selectedRace={this.state.race}
                        selectedSubrace={this.state.subrace}
                    />
                )}
                {page === 3 && (
                    <CreateCharacterThirdPage
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                        selectedRace={this.state.race}
                        selectedClass={this.state.class}
                        selectedBackground={this.state.background}
                    />
                )}
                {page === 4 && (
                    <CreateCharacterFourthPage
                        previousPage={this.previousPage}
                        onSubmit={this.onSubmit}
                    />
                )}
            </div>
        );
    }
}

export default CreateCharacterComponent;