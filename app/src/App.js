import React from 'react';
import './App.css';
import './App.scss';
import  Login from  './Pages/Login/Login';
import Dash from "./Pages/Dash/Dash";
import Etudiant from './Pages/Etudiant/Etudiant';
import Prof from './Pages/Prof/Prof';
import Matiere from './Pages/Matiere/Matiere';
import Filliere from './Pages/Filliere/Filliere';
import Salle from './Pages/Salle/Salle';
import Reservation from './Pages/Reservation/Reservation';
import Group from './Pages/Groupe/Groupe';
import AddEtudiant from './Pages/Etudiant/AddEtudiant';
import EditEtudiant from './Pages/Etudiant/EditEtudiant';
import AddProfesseur from './Pages/Prof/AddProfesseur';
import  {BrowserRouter as Router ,  Route ,   Routes } from "react-router-dom";
function App() {
  return (
   <Router>
     <Routes>
       <Route  path='/' element={<Login/>} />
       <Route  path='/Dash' element={<Dash/>} />
       <Route  path='/Etudiant' element={<Etudiant/>} />
       <Route  path='/AddE' element={<AddEtudiant/>} />
       <Route  path='/EditE' element={<EditEtudiant/>} />
       <Route  path='/AddProfesseur' element={<AddProfesseur/>} />
       <Route  path='/Etudiant' element={<Etudiant/>} />
       <Route  path='/Prof' element={<Prof/>} />
       <Route  path='/Group' element={<Group/>} />
       <Route  path='/Matiere' element={<Matiere/>} />
       <Route  path='/Filliere' element={<Filliere/>} />
       <Route  path='/Salle' element={<Salle/>} />
       <Route  path='/Reservation' element={<Reservation/>} />
     </Routes>
   </Router>
  );
}

export default App;
