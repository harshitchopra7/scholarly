import React from 'react';
import './Meme.css';
import meme1 from '../images/meme1.jpeg';
import meme2 from '../images/meme2.jpeg';

function Meme() {
    return (
        <div className="meme">
            <p>Meme Corner</p>
            <img src={meme2} alt="" />
            <img src={meme1} alt="" style={{marginTop: '50px'}} />
            
        </div>
    )
}

export default Meme;
