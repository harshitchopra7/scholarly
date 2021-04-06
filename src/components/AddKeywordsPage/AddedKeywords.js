import React, { useState } from 'react';
import './AddedKeywords.css';
import CloseIcon from '@material-ui/icons/Close';
import firebase from 'firebase';
import { db } from '../../firebase';

function AddedKeywords({ keyword }) {

    function close() {
        var ele = document.getElementById("i");
        ele.remove();
    
    }

    return (
        <div id="i" className="addedkeywords">
            <p>{keyword}</p>
            <div onClick={close}><CloseIcon style={{ cursor: 'pointer', paddingRight: '10px' }} /></div>
        </div>
    )
}

export default AddedKeywords;
