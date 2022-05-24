import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import "../Filliere/Filliere.scss";
import {  useNavigate } from "react-router-dom";
function Filliere() {
    let navigate = useNavigate();
    return (
        <div className='Filliere'>
             <Sidebar></Sidebar>
           
           <div className='Filliere-container'>
               <Navbar></Navbar>
               <h3 className='title'>Gestion Fillieres</h3>
          
          <input className='search' type="text" id="recherche" placeholder='Rechercher une Filliere'></input>
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

export default Filliere;