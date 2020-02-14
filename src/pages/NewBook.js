import React, { useState, useEffect } from 'react';
import { TextInput, TextArea, Button, DropDown } from '../components/FORM-UI';
import data from '../Data/books.json';

const NewBook = () => {
    const [values, setValues] = useState({
        title: '',
        description: '',
        isbn: '',
        no_pages: 0,
        year: '',
        image_url: ''
    }),
    [categories, setCategories] = useState([]),
    [authors, setAuthors] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setCategories(data.categories);
            setAuthors(data.authors);
        }, 1000);
    }, []);

    const handleChange = (e, name) => {
        setValues({
            ...values,
            [name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('test');
    }

    const cancel = () => {

    }

    const { title, description, isbn, no_pages, year, image_url } = values;

    return (
        <div className="new-category">
            <h1>Add new Book</h1>
            <form onSubmit={handleSubmit}>
                <TextInput
                    className="mar-bot-10"
                    label="Title"
                    value={title}
                    onChange={e => handleChange(e, 'title')}
                />
                <div className="mar-bot-10" style={{ display: 'flex' }}>
                    <DropDown
                        className="mar-right-20"
                        label="Category"
                        defaultValue="Select category"
                        options={categories}
                    />
                    <DropDown
                        label="Category"
                        defaultValue="Select category"
                        options={authors}
                    />
                </div>
                <TextArea
                    className="mar-bot-20"
                    label="Description"
                    value={description}
                    onChange={e => handleChange(e, 'description')}
                />
                <TextInput
                    className="mar-bot-10"
                    label="ISBN"
                    value={isbn}
                    onChange={e => handleChange(e, 'isbn')}
                />
                <div className="mar-bot-10" style={{ display: 'flex' }}>
                    <TextInput
                        className="mar-right-20"
                        label="No. of pages"
                        type="number"
                        value={no_pages}
                        onChange={e => handleChange(e, 'no_pages')}
                    />
                    <TextInput
                        className="mar-bot-10"
                        label="Year published"
                        value={year}
                        onChange={e => handleChange(e, 'year')}
                    />
                </div>
                <TextInput
                    className="mar-bot-20"
                    label="Image URL"
                    value={image_url}
                    onChange={e => handleChange(e, 'image_url')}
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

export default NewBook;