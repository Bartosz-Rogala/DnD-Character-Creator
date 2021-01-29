import React from 'react';

const LangaugesComponent = ({info}) => {
 


    return (
        <div className="dnd ui raised very padded text segment">
            <h4>Languages:</h4>
            {/* {!info.characterRace.languages ?
                <div>Loading...</div>
                :
            
                info.characterRace.languages.map(language =>
                <div key={language.id}>
                    {language.languageName}
                </div>
                
            )} */}
            {!info.character.languages ?
                <div>Loading...</div>
                :
            
                info.character.languages.map(language =>
                <div key={language.id}>
                    {language.languageName}
                </div>
                
            )}

        </div>
                
    );
    
}

export default LangaugesComponent;