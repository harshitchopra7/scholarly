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
    const [feedInput, setFeedInput] = useState('');

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

        const addFeed = (eve) => {
            eve.preventDefault();
            console.log(setFeedInput);
            setFeedInput("");
            setKeywordTag([]);
            alert("Feed added successfully");
        }

    // const newFeed = () => {
    //     var x = document.getElementById("o");
    //     x.remove();
    // }

    return (
        <div className="addkeywordspage_main">

        
        <div className="addkeywordspage">
        <div>
            <p className="addkeywordspage_keywords">Keywords</p>
            <div className="addkeywordspage_feed">
            <TextField
                        value={feedInput}
                        onChange={eve => setFeedInput(eve.target.value)}
                        style={{ width: '300px' }}
                        id="outlined-basic"
                        label="Add Feed Name"
                        variant="outlined"
                    />
            </div>

            <div className="addkeywordspage_flex">
                <div className="addkeywordspage_textfield">
                    
                    <TextField
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        style={{ width: '400px' }}
                        id="outlined-basic"
                        label="Add phrases"
                        variant="outlined"
                    />
                </div>
                <div className="addkeywordspage_button1">
                    <button onClick={addKeywordTag}>Add</button>
                </div>
            </div>
            <div className="over">
                {keywordTag.map(({ id, data: { keyword } }) => (
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
        </div>
        <div className="add_feed_button">
        <button onClick={addFeed}>Add Feed</button>

        </div>
            
        </div>
    )
}

export default AddKeywordsPage;
