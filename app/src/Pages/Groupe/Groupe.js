import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import "../Groupe/Groupe.scss";
function Groupe() {
    return (
        <div className='Groupe'>
             <Sidebar></Sidebar>
           
           <div className='Groupe-container'>
               <Navbar></Navbar>
               Groupe
            </div>
        </div>
    );
}

export default Groupe;