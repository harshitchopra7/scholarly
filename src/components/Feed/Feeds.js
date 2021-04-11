import React from 'react';
import './Feeds.css';
import { Link } from 'react-router-dom';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

function Feeds({ title, keyword }) {

    const bookmark = () => {
        var bookmark_color = document.getElementById("bookmark_color");
        bookmark_color.classList.toggle('active');
    }

    return (
        <div className="feeds">
            <Link to="/content" className="text-decorationn">
                <p className="feeds_title">{title}</p>
            </Link>
                <div className="keyword_bookmark">
                    <div className="keyword">
                        <p className="feeds_keyword">{keyword}</p>
                    </div>
                    <div className="bookmark">
                        <BookmarkBorderIcon id="bookmark_color" style={{color: "#012169"}} />
                    </div>
                </div>
            <hr className="hr_feed" />
        </div>
    )
}

export default Feeds;
