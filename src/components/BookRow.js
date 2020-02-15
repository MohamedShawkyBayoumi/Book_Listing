import React from 'react';
import { Link } from 'react-router-dom';
import BookIMG from './BookIMG';
import { connect } from 'react-redux';
import EditLink from '../components/EditLink';

const BookRow = ({ id, title, description, image, edit_mode }) => {
    return (
        <div className="book-row">
            <BookIMG
                title={title}
                image={image}
            />
            <div className="book-content">
                <div>
                    <h1><Link to={`/book/${id}`}>{title}</Link></h1>
                    {edit_mode && (
                        <EditLink to={`/book/${id}/edit`} />
                    )}
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    edit_mode: state.general.edit_mode
});

export default connect(mapStateToProps)(BookRow);