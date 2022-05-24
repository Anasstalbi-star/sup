import "./Sidebar.scss";
import React from 'react';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import TableRestaurantRoundedIcon from '@mui/icons-material/TableRestaurantRounded';
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import {Link} from "react-router-dom";
function Sidebar() {
    return (
        <div className="Sidebar">
           <div className="top">
               <span className="logo logo-first">Supmti</span><span className="logo logo-seconde">GS 1.0.0</span>
            </div>
          
           <div className="center">
               <ul>
                <p className="titre">Adminstration</p>
                
                <Link className="ref" to="/Dash"><DashboardRoundedIcon className="icon" style={{color : '#00926E'}}/><span>Statistique</span></Link>
                <li><SummarizeRoundedIcon className="icon" style={{color : '#00926E'}}/><span>Comptes</span></li>
                <p className="titre">Gestion</p>
                <Link className="ref" to="/Etudiant"><SupervisorAccountRoundedIcon className="icon" style={{color : '#00926E'}}/><span>Etudiants</span></Link>
                <Link className="ref" to="/Group"><PeopleAltRoundedIcon className="icon" style={{color : '#00926E'}}/><span>Groups</span></Link>
                <Link className="ref" to="/Prof"><SchoolRoundedIcon className="icon" style={{color : '#00926E'}}/><span>Professeurs</span></Link>
                <Link className="ref" to="/Filliere"><CollectionsBookmarkRoundedIcon className="icon" style={{color : '#00926E'}}/><span>Filieres</span></Link>
                <Link className="ref" to="/Matiere"><ClassRoundedIcon className="icon" style={{color : '#00926E'}}/><span>Matieres</span></Link>
                <Link className="ref" to="/Salle"><TableRestaurantRoundedIcon className="icon" style={{color : '#00926E'}}/><span>Salles</span></Link>
                <p className="titre">Emploi</p>
                <Link className="ref" to="/Dash"><AccessTimeFilledRoundedIcon className="icon" style={{color : '#00926E'}}/><span>Reservation</span></Link>
                <Link className="ref" to="/Dash"><MenuBookRoundedIcon className="icon" style={{color : '#00926E'}}/><span>Seances</span></Link>
                <p className="titre">Utiliter</p>
                <li><NotificationsActiveRoundedIcon className="icon" style={{color : '#00926E'}}/><span>Notification</span></li>
                <li><SettingsApplicationsRoundedIcon className="icon" style={{color : '#00926E'}}/><span>Parametres</span></li>
               </ul>
            </div> 
           <div className="Bottom"></div> 
        </div>
    );
}

export default Sidebar;
