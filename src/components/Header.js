import React from 'react';
import './components.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={true ? 'header-edit-mode' : ''}>
            <div className="logo">
                <h1><Link to="/">Book Listings</Link></h1>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/book/new">New Book</Link></li>
                    <li><Link to="/author/new">New Author</Link></li>
                    <li><Link to="/category/new">New Category</Link></li>
                    <li className={`${true ? 'exit-edit-mode-btn': 'edit-mode'}`}><Link to="#">{true ? 'Exit edit mode' : 'Edit Mode'}</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;