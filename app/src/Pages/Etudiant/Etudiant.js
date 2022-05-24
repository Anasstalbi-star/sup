import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import "../Etudiant/Etudiant.scss";
import {  useNavigate } from "react-router-dom";

function Etudiant() {
    let navigate = useNavigate();
    return (
        <div className='Etudiant'>
             <Sidebar></Sidebar>
           
           <div className='Etudiant-container'>
               <Navbar></Navbar>
               <h3 className='title'>Gestion Etudiants</h3>
               <input className='search' type="text" id="recherche" placeholder='Rechercher un Etudiant'></input>
                <button onClick={() => {
                                    navigate("/AddE")
                                } }>Ajouter</button>
               
                    <table id="list">
                    <tr>
                        <th id='Cin'>Cin</th>
                        <th id='Nom'>Nom</th>
                        <th id='Prenom'>Prénom</th>
                        <th id='Tel'>Tel</th>
                        <th id='Email'>Email</th>
                    </tr>
                   
                    
                    </table>

            </div>
        </div>
    );
}

export default Etudiant;