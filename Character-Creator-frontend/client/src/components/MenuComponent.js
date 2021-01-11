import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div class="ui pointing menu">
                <Link to="/" class="item">
                    DnD Character Creator
                </Link>
                <Link to="/" class="item">
                    Create Character
                </Link>
                <Link to="/view_stats" class="item">
                    View all stats
                </Link>
            </div>

        );
    }
}

export default MenuComponent;