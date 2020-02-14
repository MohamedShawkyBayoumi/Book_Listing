import React from 'react'

const TextInput = ({ label, value, onChange, className, type = 'text' }) => {
    return (
        <div style={{ width: '100%' }} className={className}>
            <div className="input-label">{label}</div>
            <input
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export {TextInput};