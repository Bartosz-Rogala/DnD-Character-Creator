import React, { Component } from 'react';

class MenuComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div class="ui pointing menu">
                <a class="active item">
                    DnD Character Creator
                </a>
                <a class="item">
                    Create Character
                </a>
                <a class="item">
                    View items
                </a>
            </div>

        );
    }
}

export default MenuComponent;