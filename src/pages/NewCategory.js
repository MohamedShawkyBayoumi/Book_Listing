import React, { useState } from 'react'
import { TextInput, Button } from '../components/FORM-UI';

const NewCategory = () => {

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('test');
    }

    const cancel = () => {

    }

    return (
        <div className="new-category">
            <h1>Add new Category</h1>
            <form onSubmit={handleSubmit}>
                <TextInput
                    className="mar-bot-20"
                    label="Name"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <Button 
                    label="Save"
                />
                <Button
                    className="cancel-btn"
                    label="Cancel"
                    onClick={cancel}
                />
            </form>
        </div>
    )
}

export default NewCategory;