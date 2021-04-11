import React from 'react';
import './Bookmarks.css';
import Bookmark from './Bookmark';
import { bookmarksData } from './bookmarksData';

function Bookmarks() {
    return (
        <div className="bookmarks">
            <div className="today">
                    <p>Bookmarks</p>
                </div>
                <div className="all_feed">
                    {bookmarksData.map((feedData) => (
                        <Bookmark title={feedData.title} keyword={feedData.keyword} />
                    ))}
                </div>
        </div>
    )
}
export default Bookmarks;