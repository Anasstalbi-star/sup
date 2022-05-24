import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import "../Matiere/Matiere.scss";

function Matiere() {
    return (
        <div className='Matiere'>
        <Sidebar></Sidebar>
      
      <div className='Matiere-container'>
          <Navbar></Navbar>
          Matiere
       </div>
   </div>
    );
}

export default Matiere;