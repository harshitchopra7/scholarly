import React, { useState } from 'react';
import './AddedKeywords.css';
import CloseIcon from '@material-ui/icons/Close';

function AddedKeywords({ keyword }) {

    return (
        <div className="addedkeywords">
            <p>{keyword}</p>
            <CloseIcon style={{cursor: 'pointer', paddingRight: '10px'}} />
        </div>
    )
}

export default AddedKeywords;
