import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import "../Groupe/Groupe.scss";
import {  useNavigate } from "react-router-dom";
function Groupe() {
    let navigate = useNavigate();
    return (
        <div className='Groupe'>
             <Sidebar></Sidebar>
           
           <div className='Groupe-container'>
               <Navbar></Navbar>
               <h3 className='title'>Gestion Groupe</h3>
          
          <input className='search' type="text" id="recherche" placeholder='Rechercher un Group'></input>
                <button onClick={() => {
                                    navigate("/Group")
                                } }>Ajouter</button>
               <div className='content'>
               <h3> </h3>
                    <div className='section'>
                            <label>Nom du Groupe </label>
                            <input type="text"></input>
                            <label>Anneé </label>
                            <input type="text"></input>
                            <label>Option Journer </label>
                            <select name="SF" id="SF">
                            <option value="Matin">Matin</option>
                            <option value="Soire">Soire</option>
                            </select>
                           
                    </div>
                    
                </div>
                    <table id="list">
                    <tr>
                        <th id='Cin'>Nom</th>
                        <th id='Cin'>Option Journer</th>
                        <th id='Cin'>Anneé</th>
                      
                    </tr>
                   
                    
                    </table>
            </div>
        </div>
    );
}

export default Groupe;