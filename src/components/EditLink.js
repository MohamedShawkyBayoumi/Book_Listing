import React from 'react';
import { Link } from 'react-router-dom';

const EditLink = ({ to }) => {
    return (
        <div className="edit-link">
            <Link to={to}>Edit</Link>
        </div>
    )
}

export default EditLink;