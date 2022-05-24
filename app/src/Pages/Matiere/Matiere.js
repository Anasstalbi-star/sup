import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import "../Matiere/Matiere.scss";
import {  useNavigate } from "react-router-dom";
function Matiere() {
    let navigate = useNavigate();
    return (
        <div className='Matiere'>
        <Sidebar></Sidebar>
        
      <div className='Matiere-container'>
          <Navbar></Navbar>
          <h3 className='title'>Gestion Matieres</h3>
          
          <input className='search' type="text" id="recherche" placeholder='Rechercher une Matiere'></input>
                <button onClick={() => {
                                    navigate("/Matiere")
                                } }>Ajouter</button>
               
                    <table id="list">
                    <tr>
                        <th id='Cin'>Nom</th>
                     
                      
                    </tr>
                   
                    
                    </table>
            </div>
       </div>
    );
}

export default Matiere;