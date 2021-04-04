import React from 'react';
import "./LeftMenu.css";
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ReorderIcon from '@material-ui/icons/Reorder';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import { Link } from 'react-router-dom';

function LeftMenuBar() {
    return (
        <div className="leftmenubar">
            <div className="leftmenubar_left">
                <div className="leftmenubar_left_name">
                    <Avatar style={{width: '70px', height: '70px'}} />
                    <p>Ankit Agrawal</p>
                </div>
                <div className="leftmenubar_left_options">
                    <p className="text-decoration" className="options_">
                        <FilterNoneIcon style={{color: "cornflowerblue"}} />
                        <Link className="text-decoration" to="/feed">
                            <p className="option_p">Feed</p>
                        </Link>
                    </p>
                    <p className="options_">
                        <ReorderIcon style={{color: "cornflowerblue"}} />
                        <Link className="text-decoration" to="/add-keywords-page">
                            <p className="option_p">Keywords</p>
                        </Link>
                    </p>
                    <p className="options_">
                        <ExitToAppIcon style={{color: "cornflowerblue"}} />
                        <Link className="text-decoration" to="/add-keywords-page">
                            <p className="option_p">Logout</p>
                        </Link>
                    </p>
                </div>

                
            </div>
            {/* <div className="addkeywords_right">
                <p>Looks like, you have not any research topics</p>
                <p>Add topics below and personalize your feed</p>
                <button> + Add Keywords</button>
            </div> */}
        </div>
    )
}

export default LeftMenuBar;
