import React from 'react';
import './NoKeywords.css';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function NoKeywords() {
    return (
        <div className="nokeywords">
                <div className="nokeywords_text">
                    <p>Looks like, you have not added any research topics</p>
                    <p>Add topics below and personalize your feed</p>
                    <p>Click on <span style={{color: "#318CE7"}}>Create Feed</span> to create your first feed.</p>
                </div>
                
            </div>
    )
}

export default NoKeywords;
