import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import "../Etudiant/Etudiant.scss";

function Etudiant() {

    return (
        <div className='Etudiant'>
             <Sidebar></Sidebar>
           
           <div className='Etudiant-container'>
               <Navbar></Navbar>
               <h3 className='title'>Gestion Etudiants</h3>
                Edit
            </div>
        </div>
    );
}

export default Etudiant;