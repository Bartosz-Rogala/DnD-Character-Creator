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
            <div style={{marginBottom: "50px"}} className="dnd ui stackable menu">
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
                <div className="right menu">
                    {this.props.modBoard && ( 
                        <Link to={"/mod"} className="item">
                            Moderator Board
                        </Link>
                    )}
                    {this.props.admBoard && ( 
                        <Link to={"/admin"} className="item">
                            Admin Board
                        </Link>
                    )}
                    {this.props.user && ( 
                        <Link to={"/user"} className="item">
                            User
                        </Link>
                    )}

                    {this.props.user ? ( 
                        <div className="ui dnd menu">
                        <Link to={"/profile"} className="item">
                            {this.props.user.username}
                        </Link>
                        <button className="ui button" onClick={this.props.logOut}>
                            LogOut
                        </button>
                        </div>
                    ) : (
                        <div className="ui dnd menu">
                        <Link to={"/login"} className="item">
                            Login
                        </Link>
                        <Link to={"/register"} className="item">
                            Sign Up
                        </Link>
                        </div>
                    )}
                </div>
            </div>

        );
    }
}



export default MenuComponent;