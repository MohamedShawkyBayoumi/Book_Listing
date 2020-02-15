import React, { useState, useEffect } from 'react';
import { TextInput, Button, TextArea } from '../components/FORM-UI';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import { addAuthor, editAuthor } from '../actions';

const NewAuthor = ({
    add_author,
    history: { push, goBack },
    match: { params: { authorId } },
    authors,
    edit_mode,
    edit_author
}) => {

    const author = authors.find(author => author.id === authorId);

    const [values, setValues] = useState({
        name: '',
        jobTitle: '',
        bio: ''
    });

    useEffect(() => {

        if(author && edit_mode){
            setValues(author);
        }

    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        try {

            let payload = {
                id: uuidv1(),
                ...values
            };

            edit_mode ? edit_author(payload) : add_author(payload);

            setTimeout(() => {
                push(`/author/${payload.id}`);
            }, 1000);

        } catch (error) {
            console.log(error);
        }

    }

    const handleChange = (e, name) => {
        setValues({
            ...values,
            [name]: e.target.value
        });
    }

    const cancel = () => {

        goBack();
    }

    const { name, jobTitle, bio } = values;

    return (
        <div className="new-category">
            <h1>{edit_mode ? 'Edit' : 'Add new'} Author</h1>
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
                    label={`${edit_mode ? 'Edit' : 'Save'}`}
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

const mapStateToProps = state => ({
    authors: state.authors.items,
    edit_mode: state.general.edit_mode
});

const mapDispatchToProps = dispatch => ({
    add_author: data => dispatch(addAuthor(data)),
    edit_author: data => dispatch(editAuthor(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAuthor);