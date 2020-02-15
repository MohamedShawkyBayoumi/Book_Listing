import React, { useState, useEffect } from 'react';
import { TextInput, TextArea, Button, DropDown } from '../components/FORM-UI';
import { addBook, editBook } from '../actions';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

const NewBook = ({
    add_book,
    edit_book,
    edit_mode,
    history: { push, goBack },
    categories = [],
    authors = [],
    books = [],
    match: { params: { bookId } }
}) => {
    

    const book = books.find(book => book.id === bookId);

    const [values, setValues] = useState({
        title: '',
        description: '',
        isbn: '',
        pagesNumber: 0,
        publishYear: '',
        image: '',
        author: '',
        category: ''
    });

    useEffect(() => {

        if(book && edit_mode){
            setValues(book);
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

            edit_mode ? edit_book(payload) : add_book(payload);

            setTimeout(() => {
                push(`/book/${payload.id}`);
            }, 1000);
            

        } catch (error) {
            console.log(error);
        }

    }

    const cancel = () => {
        goBack();
    }

    const { title, description, isbn, pagesNumber, publishYear, image, category, author } = values;

    return (
        <div className="new-category">
            <h1>{edit_mode ? 'Edit' : 'Add new'} Book</h1>
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
                        value={category}
                        options={categories}
                        onChange={e => handleChange(e, 'category')}
                    />
                    <DropDown
                        label="Author"
                        defaultValue="Select Author"
                        value={author}
                        options={authors}
                        onChange={e => handleChange(e, 'author')}
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
                        value={pagesNumber}
                        onChange={e => handleChange(e, 'pagesNumber')}
                    />
                    <TextInput
                        className="mar-bot-10"
                        label="Year published"
                        value={publishYear}
                        onChange={e => handleChange(e, 'publishYear')}
                    />
                </div>
                <TextInput
                    className="mar-bot-20"
                    label="Image URL"
                    value={image}
                    onChange={e => handleChange(e, 'image')}
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
    books: state.books.items,
    categories: state.categories.items,
    authors: state.authors.items,
    edit_mode: state.general.edit_mode
});

const mapDispatchToProps = dispatch => ({
    add_book: data => dispatch(addBook(data)),
    edit_book: data => dispatch(editBook(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBook);