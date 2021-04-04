import React from 'react';
import "./AddKeywordsPage.css";
import './AddedKeywords';
import TextField from '@material-ui/core/TextField';
import AddedKeywords from './AddedKeywords';

function AddKeywordsPage() {
    return (
        <div className="addkeywordspage">
            <p className="addkeywordspage_keywords">Keywords</p>
            <div className="addkeywordspage_textfield">
                <TextField style={{width: '500px'}} id="outlined-basic" label="Search your keywords" variant="outlined" />
            </div>
            <div>
                <AddedKeywords keyword="Metal organic frameworks" />
                <AddedKeywords keyword="Adsorption" />
            </div>
            <div className="addkeywordspage_button">
                <button>Go to feed</button>
            </div>
        </div>
    )
}

export default AddKeywordsPage;
