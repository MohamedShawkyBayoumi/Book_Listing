import React from 'react';
import './components.css';
import { Link } from 'react-router-dom';
import { toggleEditMode } from '../actions';
import { connect } from 'react-redux';

const Header = ({ edit_mode, change_mode }) => {

    return (
        <header className={edit_mode ? 'header-edit-mode' : ''}>
            <div className="logo">
                <h1><Link to="/">Book Listings</Link></h1>
                {edit_mode && 
                    <div className="edit-mode">
                        <span>Edit mode</span>
                    </div>
                }
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/book/new">New Book</Link></li>
                    <li><Link to="/author/new">New Author</Link></li>
                    <li><Link to="/category/new">New Category</Link></li>
                    <li className={`${edit_mode ? 'exit-edit-mode-btn': ''}`}>
                        <button onClick={() => change_mode()}>
                            {edit_mode ? 'Exit edit mode' : 'Edit Mode'}
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

const mapStateToProps = state => ({
    edit_mode: state.general.edit_mode
});

const mapDispatchToProps = dispatch => ({
    change_mode: () => dispatch(toggleEditMode())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);