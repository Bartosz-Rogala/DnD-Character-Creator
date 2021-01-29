import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from 'react-router-dom';

import '../DnD.css';

import MenuComponent from './MenuComponent';
import MainPageComponent from './MainPageComponent';
import LearnMoreComponent from './LearnMoreComponent';
import ViewCharactersComponent from "./ViewCharactersComponent";
import CreateCharacterComponent from './CreateCharacterWizzard/CreateCharacterComponent';
import SuccessfulCreateComponent from './ViewCharacter/SuccessfulCreateComponent';
import CharacterDetailsComponent from './ViewCharacter/CharacterDetailsComponent';

import ViewStatsComponent from "./OtherStats/ViewStatsComponent";
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

import Login from "../components/Security/Login";
import Register from "../components/Security/Register";
import Profile from "../components/Security/Profile";
import BoardUser from "../components/Security/BoardUser";
import BoardModerator from "../components/Security/BoardModerator";
import BoardAdmin from "../components/Security/BoardAdmin";

import { history } from "../helpers/history";
import AuthService from "../services/AuthService";

const App = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
        setCurrentUser(user);
        setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
        setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
        window.location.reload();
    };
   

    
        

        return (
            <div className="mainpage" >
                <Router history={history}>
                    <MenuComponent logOut={logOut} user={currentUser} modBoard={showModeratorBoard} admBoard={showAdminBoard} />
                    <div className="ui container">
                        <Switch>
                            <Route path="/" exact component={MainPageComponent}></Route>

                            <Route path="/create_character" exact component={CreateCharacterComponent}></Route>
                            <Route path="/learn_more" exact component={LearnMoreComponent}></Route>

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

                            <Route path="/successful_create/:id" exact component={SuccessfulCreateComponent}></Route>

                            <Route path="/view_characters" exact component={ViewCharactersComponent}></Route>

                            <Route path="/view_character/:id" exact component={CharacterDetailsComponent}></Route>

                            <Route path="/login" exact component={Login}></Route>
                            <Route exact path="/register" component={Register} ></Route>
                            <Route exact path="/profile" component={Profile} ></Route>
                            <Route path="/user" component={BoardUser} ></Route>
                            <Route path="/mod" component={BoardModerator} ></Route>
                            <Route path="/admin" component={BoardAdmin} ></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
            
        );
    
}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
      user,
    };
  }

export default connect(mapStateToProps)(App);