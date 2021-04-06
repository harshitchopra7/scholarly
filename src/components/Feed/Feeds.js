import React from 'react';
import './Feeds.css';
import { Link } from 'react-router-dom';

function Feeds({ title, keyword }) {
    return (
        <div className="feeds">
            <Link to="/content" className="text-decoration">
                <p className="feeds_title">{title}</p>
                <p className="feeds_keyword">{keyword}</p>
            </Link>
        </div>
    )
}

export default Feeds;
