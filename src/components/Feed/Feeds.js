import React from 'react';
import './Feeds.css';

function Feeds({ title, keyword }) {
    return (
        <div className="feeds">
            <p className="feeds_title">{title}</p>
            <p className="feeds_keyword">{keyword}</p>
        </div>
    )
}

export default Feeds;
