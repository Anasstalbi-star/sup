import React from 'react';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import "../Prof/Prof.scss";
import {  useNavigate } from "react-router-dom";
function Prof() {
    let navigate = useNavigate();
    return (
        <div className='Prof'>
        <Sidebar></Sidebar>
      
      <div className='Prof-container'>
          <Navbar></Navbar>
          <h3 className='title'>Gestion Professeurs</h3>
          <input className='search' type="text" id="recherche" placeholder='Rechercher un Prof'></input>
                <button onClick={() => {
                                    navigate("/AddProfesseur")
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

export default Prof;