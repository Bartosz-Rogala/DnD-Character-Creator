import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewStatsComponent extends Component {
    render() {
        return (
            
            <div>
                <h2 className="ui message dnd center aligned icon header">
                    <i className="circular chart bar icon"></i>
                    View all stats
                </h2>
            <div className="ui three column stackable grid">
                <div className="column">
                    <div className="ui raised segment dnd">
                        <Link to="/view_stats/character_classes">
                            View Character Classes
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment dnd">
                        <Link to="/view_stats/character_races">
                            View Character Races
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment dnd">
                        <Link to="/view_stats/character_subraces">
                            View Character Subraces
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment dnd">
                        <Link to="/view_stats/character_backgrounds">
                            View Character Backgrounds
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment dnd">
                        <Link to="/view_stats/proficiencies">
                            View Proficiencies
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment dnd">
                        <Link to="/view_stats/personality_traits">
                            View Personality Traits
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment dnd">
                        <Link to="/view_stats/languages">
                            View Language
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment dnd">
                        <Link to="/view_stats/ideals">
                            View Ideals
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment dnd">
                        <Link to="/view_stats/flaws">
                            View Flaws
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment dnd">
                        <Link to="/view_stats/equipment">
                            View Equipment
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment dnd">
                        <Link to="/view_stats/bonds">
                            View Bonds
                        </Link>
                    </div>
                </div>
            </div>

            </div>
        );
    }
}

export default ViewStatsComponent;