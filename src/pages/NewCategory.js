import React, { useState, useEffect } from 'react'
import { TextInput, Button } from '../components/FORM-UI';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import { addCategory, editCategory } from '../actions';

const NewCategory = ({
    add_category,
    history: { push, goBack },
    match: { params: { categoryId } },
    edit_mode,
    edit_category,
    categories
}) => {

    const category = categories.find(category => category.id === categoryId);

    const [values, setValues] = useState({
        name: ''
    });

    useEffect(() => {

        if(category && edit_mode){
            setValues(category);
        }

    }, []);

    const handleChange = (e, name) => {
        setValues({
            ...values,
            [name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        try {

            let payload = {
                id: uuidv1(),
                ...values
            }

            edit_mode ? edit_category(payload) : add_category(payload);
            

            setTimeout(() => {
                push(`/category/${payload.id}`);
            }, 1000);
            

        } catch (error) {
            console.log(error);
        }
    }

    const cancel = () => {

        goBack();
    }

    const { name } = values;

    return (
        <div className="new-category">
            <h1>{edit_mode ? 'Edit' : 'Add new'} Category</h1>
            <form onSubmit={handleSubmit}>
                <TextInput
                    className="mar-bot-20"
                    label="Name"
                    value={name}
                    onChange={e => handleChange(e, 'name')}
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
    categories: state.categories.items,
    edit_mode: state.general.edit_mode
});

const mapDispatchToProps = dispatch => ({
    add_category: data => dispatch(addCategory(data)),
    edit_category: data => dispatch(editCategory(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCategory);