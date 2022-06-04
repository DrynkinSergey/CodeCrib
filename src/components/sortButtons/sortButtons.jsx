import React from 'react';

const SortButtons = ({handleClick}) => {
    const btnData = [{
        type: 'All'
    },
        {
            type: 'javascript'
        },
        {
            type: 'react'
        },
        {
            type: 'css'
        },
        {
            type: 'html'
        },

    ]
    return (
        <div >
            {btnData.map(btn =>
                <button className='atuin-btn'
                    key={btn.type}
                    onClick={() => handleClick(btn.type)}>
                    <span>{btn.type}</span>
                </button>)}
        </div>
    );
};

export default SortButtons;
