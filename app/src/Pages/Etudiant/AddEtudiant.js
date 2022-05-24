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
                <div className='content'>
                    <h3>L'étudiant</h3>
                    <div className='section'>
                            <label>Cin  </label>
                            <input type="text"></input>
                            <label>Nom  </label>
                            <input type="text"></input>
                            <label>Prénom  </label>
                            <input type="text"></input>
                            <label>Date Naissance  </label>
                            <input type="date"></input>
                            <label>Lieu Naissance  </label>
                            <input type="text"></input>
                    </div>
                    <div className='section'>
                            
                            <label>Adress personnelle  </label>
                            <input type="text"></input>
                            <label>GSM </label>
                            <input type="tel"></input>
                            <label>Email </label>
                            <input type="text"></input>
                            <label>Situation Familiale </label>
                            <select name="SF" id="SF">
                            <option value="Celibataire">Célibataire</option>
                            <option value="Marie">Marié</option>
                            </select>
                    </div>
                </div>
                <div className='content'>
                    <h3>Les Parents de l'étudiant</h3>
                    <div className='section'>
                            <label>Nom  </label>
                            <input type="text"></input>
                            <label>Prénom  </label>
                            <input type="text"></input>
                            <label>Adress </label>
                            <input type="text"></input>
                            <label>Tel Domicile </label>
                            <input type="tel"></input>
                    </div>
                    <div className='section'>
                            
                            
                            <label>GSM </label>
                            <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
                            <label>Profession du Tuteur</label>
                            <input type="text"></input>   
                    </div>
                </div>
                <div className='content'>
                    <h3>Scolarités anterieures de L étudiant</h3>
                    <div className='section'>
                   
               
                    <table id="list">
                    <tr>
                        <th id='Cin'>Diplome</th>
                        <th id='Nom'>Section</th>
                        <th id='Prenom'>Etablissement</th>
                        <th id='Tel'>Année</th>
                    </tr>
                   
                    
                    </table>
                    </div>
                   
                </div>
            </div>
                  
                  
                  
               
        
        </div>
    );
}

export default Etudiant;