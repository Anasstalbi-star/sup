import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import "../Salle/Salle.scss";

function Salle() {
    return (
        <div className='Salle'>
        <Sidebar></Sidebar>
      
      <div className='Salle-container'>
          <Navbar></Navbar>
          Salle
       </div>
   </div>
    );
}

export default Salle;