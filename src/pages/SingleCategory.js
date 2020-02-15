import React, { useState } from 'react';
import BookRow from '../components/BookRow';
import { connect } from 'react-redux';
import EditLink from '../components/EditLink';
import Pagination from '../components/Pagination';

const SingleCategory = ({
    categories = [],
    books = [],
    match: { params: { categoryId } },
    edit_mode
}) => {
    let index = categories.findIndex(author => author.id === categoryId);

    let category = categories[index];

    let filteredBooks = books.length > 0 && category ? books.filter(book => book.category === category.id) : [];


    const [currentPage, setCurrentPage] = useState(1),
          [booksPerPage, setBooksPerPagev] = useState(6);

    const handleClick = event => {
        
        if(Number(event.target.id) !== 0 && Number(event.target.id) !== Math.ceil(filteredBooks.length / booksPerPage) + 1){
            setCurrentPage(Number(event.target.id));
        }
    }

    return (
        <div className="single-category">
            {category && (
                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h1>{category.name}</h1>
                        {edit_mode && (
                            <EditLink to={`/category/${category.id}/edit`} />
                        )}
                    </div>
                    {/* {filteredBooks && filteredBooks.length > 0 && filteredBooks.map((book, i) => (
                        <BookRow {...book} key={i} />
                    ))} */}
                    <Pagination
                        books={filteredBooks}
                        currentPage={currentPage}
                        booksPerPage={booksPerPage}
                        handleClick={handleClick}
                    />
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    edit_mode: state.general.edit_mode
});

export default connect(mapStateToProps)(SingleCategory);