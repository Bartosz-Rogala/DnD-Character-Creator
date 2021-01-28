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
            <div style={{marginBottom: "50px"}} className="ui pointing menu">
                <Link to="/" className="item">
                    DnD Character Creator
                </Link>
                <Link to="/create_character" className="item">
                    Create Character
                </Link>
                <Link to="/view_characters" className="item">
                    View Created Characters
                </Link>
                <Link to="/view_stats" className="item">
                    View All Stats
                </Link>
            </div>

        );
    }
}

export default MenuComponent;