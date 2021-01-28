import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPageComponent extends Component {

    render() {
        return (
            <div className="ui message dnd">
                <div>
                    <img alt="Dungeons and Dragons" className="ui medium centered image" src="DnD_logo.png" />
                </div>
                <div className="ui center aligned header">
                    <br></br>
                    <h2>Welcome to DnD Character Creator!</h2>

                    This application will help you create your very own Dungeons and Dragon character
                    
                    <br></br>
                    <br></br>
                    <br></br>
                    <Link to="/create_character">
                        <button className="ui DnDpositive button">
                            Create Character
                        </button>
                    </Link>

                    <Link to="/learn_more">
                        <button style={{marginLeft: "10px"}} className="ui secondary button">
                            Learn more
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default MainPageComponent;