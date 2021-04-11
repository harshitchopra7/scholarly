import React from 'react';
import { Link } from 'react-router-dom';
import RemoveIcon from '@material-ui/icons/Remove';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './FeedCreated.css';

function FeedCreated({feedName}) {
    return (
        <div className="feed_created">
            <Link className="text-decoration" to="/feed">
                <div><ArrowForwardIosIcon style={{color: "#318CE7", width: '15px', height: '15px', marginRight: '5px', marginTop: '4px'}}  /></div>
                <div><p>Feed 1</p></div>
                {/* <div className="edit_button"><RemoveIcon /></div> */}
            </Link>
        </div>
    );
}

export default FeedCreated;