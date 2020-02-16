import React, { useState, useEffect } from 'react'
import BookRow from '../components/BookRow';
import Pagination from '../components/Pagination';
import { TextInput } from '../components/FORM-UI';
import { searchBook } from '../actions';
import { connect } from 'react-redux';

const Home = ({ books = [], search }) => {

    const [currentPage, setCurrentPage] = useState(1),
        [booksPerPage, setBooksPerPagev] = useState(6),
        [value, setValue] = useState('');

    const handleClick = event => {
        if(Number(event.target.id) !== 0 && Number(event.target.id) !== Math.ceil(books.length / booksPerPage) + 1){
        setCurrentPage(Number(event.target.id));
        }
    }

    const handleChange = e => {
        setValue(e.target.value);
        search(e.target.value);
    }


    useEffect(() => {
        return () => {
            search('');
        }
    }, []);

    return (
        <div>
            {/* {books && books.length > 0 && books.map((book, i) => (
                <BookRow {...book} key={i} />
            ))} */}

            <div className="search">
                <TextInput 
                    label="Search"
                    value={value}
                    onChange={handleChange}
                />
            </div>

            <Pagination
                books={books}
                currentPage={currentPage}
                booksPerPage={booksPerPage}
                handleClick={handleClick}
            />

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    search: text => dispatch(searchBook(text))
});

export default connect(null, mapDispatchToProps)(Home);