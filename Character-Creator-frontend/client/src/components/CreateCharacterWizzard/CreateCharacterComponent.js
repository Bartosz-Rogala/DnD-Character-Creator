import React, { Component } from 'react';
import CreateCharacterFirstPage from './CreateCharacterFirstPage';
import CreateCharacterSecondPage from './CreateCharacterSecondPage';
import CreateCharacterThirdPage from './CreateCharacterThirdPage';

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

    

    onSubmit(formValues) {
        console.log(formValues);
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
                        onSubmit={this.onSubmit}
                    />
                )}
            </div>
        );
    }
}

export default CreateCharacterComponent;