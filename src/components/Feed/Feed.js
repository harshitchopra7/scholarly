import React from 'react';
import './Feed.css';
import Feeds from './Feeds';
import { feedData } from './feedData';
import { topData } from './topData';

function Feed() {
    return (
        <div className="feed">
            <div className="feed_main">
                <p className="feed_relevant">Top Recommendations</p>
                <div className="top_recommendations">
                    {topData.map((topData) => (
                        <Feeds title={topData.title} keyword={topData.keyword} />
                    ))}
                </div>
                <div className="today">
                    <p>Today</p>
                </div>
                <div className="all_feed">
                    {feedData.map((feedData) => (
                        <Feeds title={feedData.title} keyword={feedData.keyword} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Feed;
