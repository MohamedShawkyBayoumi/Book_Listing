import React from 'react';
import BookRow from '../components/BookRow';

const Pagination = ({ books, currentPage, booksPerPage, handleClick }) => {

    // Logic for displaying todos
    //                          1       *       6
    const indexOfLastBook = currentPage * booksPerPage;
    //                              6          -    6
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    //                                      0               6
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    //              [1, 2, 3, 4, 5, 6]
    const renderBooks = currentBooks.map((book, i) => {
        return (
            <BookRow {...book} key={i} />
        )
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number, i) => {
        return (
            <li
                className={`${number === currentPage ? 'pagination-active' : ''}`}
                key={number}
                id={number}
                onClick={handleClick}
                >
                {number}
            </li>
        );
    });

    return (
        <div>
            <ul>{renderBooks}</ul>

            {books.length > 6 && (
                <div className="pagination-container">
                    <nav>
                        <ul className="pagination">
                            <li onClick={handleClick} id={currentPage - 1} className="page-item">&laquo;</li>
                            {renderPageNumbers}
                            <li onClick={handleClick} id={currentPage + 1} className="page-item">&raquo;</li>
                        </ul>
                    </nav>
                </div>
            )}
            
        </div>
    )
}

export default Pagination;