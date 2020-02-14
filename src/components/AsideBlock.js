import React from 'react';
import { Link } from 'react-router-dom';

const AsideBlock = ({ title = 'title', list = [], block }) => {
    return (
        <div className="aside-block">
            <h3>{title}</h3>
            <ul>
                {list && list.length > 0 && list.map(({ id, name }, i) => (
                    <li key={i}><Link to={`/${block === 1 ? 'category' : 'author'}/${id}`}>{name}</Link></li>      
                ))}
            </ul>
        </div>
    )
}

export default AsideBlock;