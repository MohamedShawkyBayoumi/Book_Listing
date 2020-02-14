import React, { Fragment } from 'react';

const Button = ({ label, onClick, className }) => {
    return (
        <Fragment>
            <button
                onClick={onClick}
                className={className}
            >
                {label}
            </button>
        </Fragment>
    )
}

export {Button};