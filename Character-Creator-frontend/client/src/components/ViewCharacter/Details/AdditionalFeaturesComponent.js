import React from 'react';

const AdditionalFeaturesComponent = ({info}) => {

    return (
        <div className="ui raised very padded text segment">
            <h4>Additional Features and Traits:</h4>
            {info.additionalFeaturesAndTraits}
        </div>
                
    );
    
}

export default AdditionalFeaturesComponent;