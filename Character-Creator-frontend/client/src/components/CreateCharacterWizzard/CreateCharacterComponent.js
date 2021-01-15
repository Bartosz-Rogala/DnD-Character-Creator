import React, { Component } from 'react';
import CharacterService from '../../services/CharacterService';
import CreateCharacterFirstPage from './CreateCharacterFirstPage';
import CreateCharacterSecondPage from './CreateCharacterSecondPage';
import CreateCharacterThirdPage from './CreateCharacterThirdPage';
import CreateCharacterFourthPage from './CreateCharacterFourthPage';

class CreateCharacterComponent extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
          page: 1
        }

    }

    

    nextPage() {
        
        this.setState({ page: this.state.page + 1 })
    }
    
    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    

    onSubmit = (formValues) => {

        let character = {
            additionalFeaturesAndTraits: formValues.additionalFeaturesAndTraits, 
            age: formValues.age, 
            alignment: formValues.alignment.alignment,
            alliesAndOrganisations: formValues.alliesAndOrganisations,
            characterBackground: JSON.parse(formValues.background),
            bond: formValues.bond,
            characterBackstory: formValues.characterBackstory,
            charisma: formValues.charisma,
            characterClass: JSON.parse(formValues.class),
            constitution: formValues.constitution,
            dexterity: formValues.dexterity,
            eyes: formValues.eyes,
            flaw: formValues.flaw,
            hair: formValues.hair,
            height: formValues.height,
            ideal: formValues.ideal,
            intelligence: formValues.intelligence,
            characterName: formValues.name,
            personalityTrait: formValues.personalityTrait,
            characterRace: JSON.parse(formValues.race),
            skin: formValues.skin,
            strength: formValues.strength,
            characterSubrace: JSON.parse(formValues.subrace),
            treasure: formValues.treasure,
            weight: formValues.weight,
            wisdom: formValues.wisdom,
            };

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
                        onSubmit={this.nextPage} 
                    />}
                {page === 2 && (
                    <CreateCharacterSecondPage
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 3 && (
                    <CreateCharacterThirdPage
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
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