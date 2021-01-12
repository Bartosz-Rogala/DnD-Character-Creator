import React from 'react';

const renderField = ({ input, label, meta: {touched, error} }) => (
    
    <div className="field">
        <label>{label}</label>
        {touched && error && <span>{error}</span>}
        <input {...input} />
        
    </div>
    
)

export default renderField;