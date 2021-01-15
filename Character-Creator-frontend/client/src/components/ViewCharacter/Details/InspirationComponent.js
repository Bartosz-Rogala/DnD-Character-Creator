import React from 'react';

const InspirationComponent = ({info}) => {

    return (
        <div className="ui raised very padded text segment">
            <h4>Inspiration:</h4>
            <table className="ui very basic collapsing celled table">
                <tbody>
                    <tr>
                        <td>Personality Traits</td>
                        <td>{info.personalityTrait}</td>
                    </tr>
                    <tr>
                        <td>Ideals</td>
                        <td>{info.ideal}</td>
                    </tr>
                    <tr>
                        <td>Bonds</td>
                        <td>{info.bond}</td>
                    </tr>
                    <tr>
                        <td>Flaws</td>
                        <td>{info.flaw}</td>
                    </tr>
                </tbody>
            </table>
        </div>
                
    );
    
}

export default InspirationComponent;