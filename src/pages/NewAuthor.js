import React, { useState } from 'react';
import { TextInput, Button, TextArea } from '../components/FORM-UI';

const NewAuthor = () => {
    const [values, setValues] = useState({
        name: '',
        jobTitle: '',
        bio: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
    }

    const handleChange = (e, name) => {
        setValues({
            ...values,
            [name]: e.target.value
        });
    }

    const cancel = () => {

    }

    const { name, jobTitle, bio } = values;

    return (
        <div className="new-category">
            <h1>Add new Author</h1>
            <form onSubmit={handleSubmit}>
                <TextInput
                    className="mar-bot-10"
                    label="Name"
                    value={name}
                    onChange={e => handleChange(e, 'name')}
                />
                <TextInput
                    className="mar-bot-10"
                    label="Job title"
                    value={jobTitle}
                    onChange={e => handleChange(e, 'jobTitle')}
                />
                <TextArea
                    className="mar-bot-20"
                    label="Bio"
                    value={bio}
                    onChange={e => handleChange(e, 'bio')}
                />
                <Button 
                    label="Save"
                    // onClick={handleClick}
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

export default NewAuthor;