import React from 'react';

const BackstoryComponent = ({info}) => {

    return (
        <div className="ui raised very padded text segment">
            <h4>Character Backstory:</h4>
            {info.characterBackstory}
        </div>
                
    );
    
}

export default BackstoryComponent;