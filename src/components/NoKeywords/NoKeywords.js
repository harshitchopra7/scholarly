import React from 'react';
import './NoKeywords.css';
import { Link } from 'react-router-dom';

function NoKeywords() {
    return (
        <div className="nokeywords">
                <div className="nokeywords_text">
                    <p>Looks like, you have not added any research topics</p>
                    <p>Add topics below and personalize your feed</p>
                </div>
                <Link to="/add-keywords-page">
                    <button className="nokeywords_button"> + Add Keywords</button>
                </Link>
            </div>
    )
}

export default NoKeywords;
