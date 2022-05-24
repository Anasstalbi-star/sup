import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import "../Filliere/Filliere.scss";
function Filliere() {
    return (
        <div className='Filliere'>
             <Sidebar></Sidebar>
           
           <div className='Filliere-container'>
               <Navbar></Navbar>
               Filliere
            </div>
        </div>
    );
}

export default Filliere;