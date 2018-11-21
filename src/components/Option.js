import React from 'react';

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick = { (e) => {
                    props.handleDeleteOneOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

export default Option;
