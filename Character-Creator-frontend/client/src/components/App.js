import React from "react";
import MenuComponent from './MenuComponent';
import ProficienciesListComponent from './OtherStats/ProficienciesListComponent';
import PersonalityTraitsListComponent from './OtherStats/PersonalityTraitsListComponent';
import LanguagesListComponent from './OtherStats/LanguagesListComponent';
import CharacterClassListComponent from './OtherStats/CharacterClassListComponent';
import CharacterRaceListComponent from './OtherStats/CharacterRaceListComponent';
import CharacterSubraceListComponent from './OtherStats/CharacterSubraceListComponent';
import CharacterBackgroundListComponent from './OtherStats/CharacterBackgroundListComponent';
import IdealListComponent from './OtherStats/IdealListComponent';
import FlawListComponent from './OtherStats/FlawListComponent';
import EquipmentListComponent from './OtherStats/EquipmentListComponent';
import BondListComponent from './OtherStats/BondListComponent';


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
                            <Route path="/view_stats/personality_traits" exact component={PersonalityTraitsListComponent}></Route>
                            <Route path="/view_stats/languages" exact component={LanguagesListComponent}></Route>
                            <Route path="/view_stats/character_classes" exact component={CharacterClassListComponent}></Route>
                            <Route path="/view_stats/character_races" exact component={CharacterRaceListComponent}></Route>
                            <Route path="/view_stats/character_subraces" exact component={CharacterSubraceListComponent}></Route>
                            <Route path="/view_stats/character_backgrounds" exact component={CharacterBackgroundListComponent}></Route>
                            <Route path="/view_stats/ideals" exact component={IdealListComponent}></Route>
                            <Route path="/view_stats/flaws" exact component={FlawListComponent}></Route>
                            <Route path="/view_stats/equipment" exact component={EquipmentListComponent}></Route>
                            <Route path="/view_stats/bonds" exact component={BondListComponent}></Route>
                            
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
            
        );
    }
}

export default App;