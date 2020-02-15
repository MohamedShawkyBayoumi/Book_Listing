import React from 'react'

const DropDown = ({ label, defaultValue, className, options = [], onChange, value }) => {
    return (
        <div style={{ width: '100%' }} className={className}>
            <div className="input-label">{label}</div>
            <select onChange={onChange} value={value}>
                <option value="">{defaultValue}</option>
                {options && options.length > 0 && options.map(({ id, name }, i) => (
                    <option key={i} value={id}>{name}</option>
                ))}
            </select>
        </div>
    )
}

export {DropDown};