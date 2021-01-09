import React from "react";
import MenuComponent from './MenuComponent';
import ProficienciesList from './OtherStats/ProficienciesList';

class App extends React.Component {

    render() {
        return (
            <div>
                <MenuComponent />
                <div className="ui container">
                   <ProficienciesList />
                </div>
                
            </div>
            
        );
    }
}

export default App;