import React from 'react';

const TreasureComponent = ({info}) => {

    return (
        <div className="ui raised very padded text segment">
            <h4>Treasure:</h4>
            {info.treasure}
        </div>
                
    );
    
}

export default TreasureComponent;