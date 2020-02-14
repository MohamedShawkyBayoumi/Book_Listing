import React, { Fragment } from 'react'

const TextArea = ({ label, value, onChange, className }) => {
    return (
        <Fragment>
            <div className="input-label">{label}</div>
            <textarea
                className={className}
                onChange={onChange}
                value={value}
            />
        </Fragment>
    )
}

export {TextArea};