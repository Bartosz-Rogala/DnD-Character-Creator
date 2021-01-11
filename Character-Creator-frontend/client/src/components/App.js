import React from "react";
import MenuComponent from './MenuComponent';
import ProficienciesListComponent from './OtherStats/ProficienciesListComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ViewStatsComponent from "./OtherStats/ViewStatsComponent";

class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuComponent />
                    <div className="ui container">
                        <Switch>
                            <Route path="/" exact component={MenuComponent}></Route>

                            <Route path="/view_stats" exact component={ViewStatsComponent}></Route>
                            <Route path="/view_stats/proficiencies" exact component={ProficienciesListComponent}></Route>
                            
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
            
        );
    }
}

export default App;