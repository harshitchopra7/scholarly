import React, { useEffect } from 'react';
import "./LeftMenu.css";
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ReorderIcon from '@material-ui/icons/Reorder';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import { Link } from 'react-router-dom';
import image from '../images/1.jpeg';
import { useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AddKeywordsPage from '../AddKeywordsPage/AddKeywordsPage';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FeedCreated from './FeedCreated';
import { db } from '../../firebase';
import firebase from 'firebase';

function LeftMenuBar() {

    const dispatch = useDispatch()

	const user = useSelector(selectUser);

	const signOut=()=>{
		auth.signOut().then(()=>{
			dispatch(logout())
		})
	}

    const toggle = () => {
        var blur = document.getElementById("blur");
        blur.classList.toggle('active');
        var popuppp = document.getElementById("popuppp");
        popuppp.classList.toggle('active');
    }

    var feedRef = db.collection('feeds').doc("F24yYRUXsz1nToRmJdCq");

    feedRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    console.log(user.photoUrl);
    console.log(user.displayName);
    console.log(user.uid);


    return (
        <div>

        
        <div id="blur" className="leftmenubar">
            <div className="leftmenubar_left">
                <div className="leftmenubar_left_name">
                    <Avatar src={user.photoURL} style={{width: '120px', height: '120px'}} alt="" />
                    <p>{user.displayName}</p>
                    {/* <Avatar src='' alt="" />
                    <p>Harshit Chopra</p> */}
                </div>

                <p className="options_feed">
                    <p className="option_pf"><FeedCreated /></p>
                </p>
                <p className="options_feed">
                    <p className="option_pf"><FeedCreated /></p>
                </p>

                <div className="leftmenubar_left_options">
                    <p onClick={toggle} className="text-decoration" className="options_">
                        <AddCircleOutlineIcon style={{color: "#318CE7"}} />
                        {/* <Link className="text-decoration" to="/feed"> */}
                            <p className="option_p">Create Feed</p>
                        {/* </Link> */}
                    </p>
                    <p className="options_">
                        <BookmarkBorderIcon style={{color: "#318CE7"}} />
                        <Link className="text-decoration" to="/bookmarks">
                            <p className="option_p">Bookmarks</p>
                        </Link>
                    </p>
                    <p className="options_">
                        <ExitToAppIcon style={{color: "#318CE7"}} />
                        <Link to="/" className="text-decoration" onClick={signOut}>
                            <p className="option_p">Logout</p>
                        </Link>
                    </p>
                </div>
                <div className="foo">
                <p>??2021 Scholarlys</p>
                </div>
                
                
            </div>
            {/* <div className="addkeywords_right">
                <p>Looks like, you have not any research topics</p>
                <p>Add topics below and personalize your feed</p>
                <button> + Add Keywords</button>
            </div> */}
            
        </div>
        <div id="popuppp">
                    <div className="cross_mainn">
                        <p className="crosss" onClick={toggle}>&times;</p>
                    </div>
                    <div>
                        <AddKeywordsPage cross={toggle} />
                    </div>
                </div>
        </div>
    )
}

export default LeftMenuBar;
