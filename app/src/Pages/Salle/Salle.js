import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import "../Salle/Salle.scss";
import {  useNavigate } from "react-router-dom";
function Salle() {
    let navigate = useNavigate();
    return (
        <div className='Salle'>
        <Sidebar></Sidebar>
      
      <div className='Salle-container'>
          <Navbar></Navbar>
          <h3 className='title'>Gestion Salles</h3>
          
          <input className='search' type="text" id="recherche" placeholder='Rechercher une Salle'></input>
                <button onClick={() => {
                                    navigate("/Salle")
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

export default Salle;