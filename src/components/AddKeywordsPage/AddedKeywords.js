import React, { useState } from 'react';
import './AddedKeywords.css';
import CloseIcon from '@material-ui/icons/Close';

function AddedKeywords({ keyword }) {

    // const [del, setDel] = useState(false);
    // const close = () => {
    //     setDel(true)
    //     if (setDel) {
    //         .addedkeywords.style.display(none);
    //     }
    // }

    return (
        <div className="addedkeywords">
            <p>{keyword}</p>
            <CloseIcon style={{cursor: 'pointer', paddingRight: '10px'}} />
        </div>
    )
}

export default AddedKeywords;
