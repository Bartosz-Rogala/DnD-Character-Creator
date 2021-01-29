import React from 'react';

const AlliesAndOrganisationsComponent = ({info}) => {

    return (
        <div className="dnd ui raised very padded text segment">
            <h4>Allies and Organisations:</h4>
            {info.alliesAndOrganisations}
        </div>
                
    );
    
}

export default AlliesAndOrganisationsComponent;