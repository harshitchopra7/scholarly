import React, { useEffect, useState } from 'react';
import "./AddKeywordsPage.css";
import './AddedKeywords';
import TextField from '@material-ui/core/TextField';
import AddedKeywords from './AddedKeywords';
import { Link } from 'react-router-dom';

import { db } from '../../firebase';
import firebase from 'firebase';

function AddKeywordsPage() {

    const [keywordTag, setKeywordTag] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('keywordTag').orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
        setKeywordTag(
            snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            ))
        ))
    }, [])

    const addKeywordTag = (e) => {
        e.preventDefault();

        db.collection('keywordTag').add({
            keyword: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput("");
    };

    return (
        <div className="addkeywordspage">
            <p className="addkeywordspage_keywords">Keywords</p>
            <div className="addkeywordspage_textfield">
                <TextField 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    style={{width: '500px'}}
                    id="outlined-basic" 
                    label="Search your keywords" 
                    variant="outlined" 
                />
            </div>
            <div className="addkeywordspage_button1">
                <button onClick={addKeywordTag}>Add</button>
            </div>
            <div className="over">
                {keywordTag.map(({id, data: { keyword }}) => (
                    <AddedKeywords
                    key={id}
                    keyword={keyword}
                    />
                ))}
            </div>
            
            {/* <div>
                <AddedKeywords keyword="Metal organic frameworks" />
                <AddedKeywords keyword="Adsorption" />
            </div> */}
            <div>
                <Link className="addkeywordspage_button2" to="/feed"><button>Go to feed</button></Link>
            </div>
        </div>
    )
}

export default AddKeywordsPage;
