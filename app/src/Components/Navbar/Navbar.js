
import "./Navbar.scss";
import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MarkEmailUnreadRoundedIcon from '@mui/icons-material/MarkEmailUnreadRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import avatar from '../Navbar/avatar.jpg'

function Navbar() {
    return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
           
            </div>
            <div className="items">
                <div className="item">
                <SubjectRoundedIcon  className="icon" style={{color: "#00926E"}}/>
                <div className="counter">1</div>
                </div>
                <div className="item">
                <MarkEmailUnreadRoundedIcon  className="icon" style={{color: "#00926E"}}/>
                <div className="counter">1</div>
                </div>
                
                <div className="item">
                 <img  src={avatar} alt="" className="avatar"></img>
                </div>
            </div>
            
            
        </div>
    </div>        

    );
}

export default Navbar;