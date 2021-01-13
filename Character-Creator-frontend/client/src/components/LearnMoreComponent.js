import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LearnMoreComponent extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                        <button className="ui secondary button">
                            Back
                        </button>
                </Link>
                
                <div className="ui icon compact message">
                    <i className="medapps icon"></i>
                    <div className="aligned center ui">
                        <b>DnD character creator</b> is a hobby project created by <b>Bartosz Rogala</b>. 
                        <br></br>
                        <br></br>
                        DnD character creator allows user to quickly and easily create DnD character and generate character sheet. It also allows user to view all possible stats that character can have
                        <br></br>
                        <br></br>
                        It is still in development. <br></br>
                        if you have any suggestions or questions, please contact me: bartosz.j.rogala@gmail.com
                    </div>
                </div>

                <br></br>
                <br></br>

                <h2> DnD character creator is a fullstack application: </h2>

                <h3>Fontend-side tools and technologies used: </h3>
                <div className="ui middle aligned bulleted animated list">
                    <div className="item"> React (JavaScript library) </div>
                    <div className="item"> Modern JavaScript (ES6) </div>
                    <div className="item"> Node JS and NPM (to install and create the project) </div>
                    <div className="item"> Create React App CLI </div>
                    <div className="item"> Semantic UI (front-end development framework) </div>
                    <div className="item"> Axios HTTP Library </div>
                </div>

                <h3> Server-side technologies used: </h3>
                    <div className="ui middle aligned bulleted animated list">
                    <div className="item"> Spring Boot </div>
                    <div className="item"> SpringData JPA (Hibernate) </div>
                    <div className="item"> Maven </div>
                    <div className="item"> MySQL Database </div>
                </div>


                <br></br>

                <div className="ui icon negative compact message">
                    <i className="notched circle loading icon"></i>
                    <div className="content">
                        <div className="header">
                            To be developed:
                        </div>
                        <ul className="list">
                            <li> finish character creation </li>
                            <li> user account (Spring Security) </li>
                            <li> view already created characters </li>
                            <li> upgrade created characters </li>
                        </ul>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default LearnMoreComponent;