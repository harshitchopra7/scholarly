import React from 'react';
import './Feed.css';
import Feeds from './Feeds';
import { feedData } from './feedData';

function Feed() {
    return (
        <div className="feed">
            <div className="feed_main">
                <p className="feed_relevant">Most Relevant</p>
                <div>
                    {feedData.map((feedData) => (
                        <Feeds title={feedData.title} keyword={feedData.keyword} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Feed;
