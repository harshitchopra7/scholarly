import React, { useEffect, useState } from 'react';
import "./AddKeywordsPage.css";
import './AddedKeywords';
import TextField from '@material-ui/core/TextField';
import AddedKeywords from './AddedKeywords';
import { Link, useHistory } from 'react-router-dom';

import { db } from '../../firebase';
import firebase from 'firebase';
import FeedCreated from '../LeftMenuBar/FeedCreated';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function AddKeywordsPage({ toggle }) {

    const [keywords, setKeywords] = useState([]);
    const [input, setInput] = useState('');
    const [feedInput, setFeedInput] = useState('');

    const history = useHistory();

    const user = useSelector(selectUser);

    // useEffect(() => {
    //     db.collection('keywords').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
    //         setKeywords(
    //             snapshot.docs.map((doc) => (
    //                 {
    //                     id: doc.id,
    //                     data: doc.data()
    //                 }
    //             ))
    //         ))
    // }, [])
    
    useEffect(() => {

        db.collection('keywords').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setKeywords(
                snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                ))
            ))
    }, [])

    const addKeywordTag = (e) => {
        // e.preventDefault();

        db.collection('keywords').add({
            keyword: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput("");
    };

        const addFeed = (eve) => {
            eve.preventDefault();

            db.collection('feeds').add({
                feed: feedInput,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

            console.log(setFeedInput);
            setFeedInput("");
            setKeywords([]);
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
            <p className="addkeywordspage_keywords">Create Feed</p>
            <div className="addkeywordspage_feed">
            <TextField
                        value={feedInput}
                        onChange={eve => setFeedInput(eve.target.value)}
                        style={{ width: '300px'}}
                        id="outlined-basic"
                        label="Add Feed Name"
                        variant="outlined"
                        InputLabelProps={{style: {fontSize: 15}}}
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
                        InputLabelProps={{style: {fontSize: 15}}}
                    />
                </div>
                <div className="addkeywordspage_button1">
                    <button onClick={addKeywordTag}>Add</button>
                </div>
            </div>
            <div className="over">
                {keywords.map(({ id, data: { keyword } }) => (
                    <AddedKeywords
                        id={id}
                        keyword={keyword}
                    />
                ))}
            </div>

            

            {/* <div>
                <AddedKeywords keyword="Metal organic frameworks" />
                <AddedKeywords keyword="Adsorption" />
            </div> */}
            {/* <div>
                <Link className="addkeywordspage_button2" to="/feed"><button>Go to feed</button></Link>
                </div> */}
                    <div className="add_feed_button">
                <button onClick={addFeed} >Add Feed</button>

                </div>
            </div>
        
        </div>
        
            
        </div>
    )
}

export default AddKeywordsPage;
