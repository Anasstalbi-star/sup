import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import "../Prof/Prof.scss";

function Prof() {
    return (
        <div className='Etudiant'>
             <Sidebar></Sidebar>
           
           <div className='Etudiant-container'>
               <Navbar></Navbar>
               <h3 className='title'>Gestion Professeurs</h3>
                <div className='content'>
                    <h3>Professeur</h3>
                    <div className='section'>
                            <label>Cin  </label>
                            <input type="text"></input>
                            <label>Nom  </label>
                            <input type="text"></input>
                            <label>Prénom  </label>
                            <input type="text"></input>
                    </div>
                    <div className='section'>
                            
                            <label>Adress personnelle  </label>
                            <input type="text"></input>
                            <label>GSM </label>
                            <input type="tel"></input>
                            <label>Email </label>
                            <input type="text"></input>
                           
                    </div>
                </div>
                <div className='content'>
                    <h3> </h3>
                    <div className='section'>
                            <label>Grade</label>
                            <select name="SF" id="SF">
                            <option value="Doc">Docteur</option>
                            <option value="Doctoran">Doctoran</option>
                            </select>
                            <label>Specialité</label>
                            <select name="SF" id="SF">
                            <option value="Informatique">Informatique</option>
                            <option value="Management">Management</option>
                            <option value="Class Prepa">Class Preparatoire</option>
                            </select>
                            <label>Element de module</label>
                            <select name="SF" id="SF">
                            <option value=".Net">.Net</option>
                            <option value="java">java</option>
                            <option value="React">React</option>
                            </select>
                    </div>
                    <div className='section'>
                            
                            <label>Etablissement Origin</label>
                            <select name="SF" id="SF">
                            <option value="Informatique">Informatique</option>
                            <option value="Management">Management</option>
                            <option value="Class Prepa">Class Preparatoire</option>
                            </select>
                            <label>Option de Travaille</label>
                            <select name="SF" id="SF">
                            <option value="Vacataire">Vacataire</option>
                            <option value="Permanent">Permanent</option>
                            </select>
                    </div>
                </div>
                <div className='content'>
                    <h3>Pieces jointes</h3>
                    <div className='section'>
                    <label>Cin :</label>
                    <input type="file" id="myFile" name="filename" placeholder='Cin FORMAT PDF'></input>
                    <label>CV :</label>
                    <input type="file" id="myFile" name="filename" placeholder='CV FORMAT PDF'></input>
                    </div>
                   
                </div>
            </div>
                  
                  
                  
               
        
        </div>
    );
}

export default Prof;