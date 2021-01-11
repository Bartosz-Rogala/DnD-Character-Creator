import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewStatsComponent extends Component {
    render() {
        return (
            <div>
                <h2 class="ui center aligned icon header">
                    <i class="circular chart bar icon"></i>
                    View all stats
                </h2>
            <div class="ui three column stackable grid">
                <div class="column">
                    <div class="ui raised segment">
                        <Link to="/view_stats/proficiencies">
                            View Proficiencies
                        </Link>
                    </div>
                </div>
                <div class="column">
                    <div class="ui raised segment">
                        Hi
                    </div>
                </div>
                <div class="column">
                    <div class="ui raised segment">
                        How are ya
                    </div>
                </div>

                <div class="column">
                    <div class="ui raised segment">
                        How aasda
                    </div>
                </div>
            </div>

            </div>
        );
    }
}

export default ViewStatsComponent;