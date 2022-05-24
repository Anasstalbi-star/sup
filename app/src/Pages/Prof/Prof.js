import React from 'react';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import "../Prof/Prof.scss";

function Prof() {
    return (
        <div className='Prof'>
        <Sidebar></Sidebar>
      
      <div className='Prof-container'>
          <Navbar></Navbar>
          Prof
       </div>
   </div>
    );
}

export default Prof;