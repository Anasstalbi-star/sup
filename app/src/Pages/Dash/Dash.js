import React  from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../../Components/Card/Card';
import { DataGrid } from '@mui/x-data-grid';
import "./Dash.scss";
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';

function Dash() {
    
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Jour', headerName: 'Jour', width: 90},
    { field: 'Horaire', headerName: 'Horaire', width: 130},
    { field: 'Groupe', headerName: 'Groupe', width: 130 },
    { field: 'Prof', headerName: 'Prof', width: 150 },
    { field: 'Salle', headerName: 'Salle', width: 90},
    { field: 'Matiere', headerName: 'Matiere', width: 130},
   
  ];
  
  const rows = [
    { id: 1, Jour:"Lundi" , Horaire:"9h00 : 11h00" , Groupe: "ISI4" , Prof :"Prof" , Salle :"B1" , Matiere:".Net"},
    { id: 1, Jour:"Lundi" , Horaire:"9h00 : 11h00" , Groupe: "ISI4" , Prof :"Prof" , Salle :"B1" , Matiere:".Net"},
    { id: 1, Jour:"Lundi" , Horaire:"9h00 : 11h00" , Groupe: "ISI4" , Prof :"Prof" , Salle :"B1" , Matiere:".Net"},
    { id: 1, Jour:"Lundi" , Horaire:"9h00 : 11h00" , Groupe: "ISI4" , Prof :"Prof" , Salle :"B1" , Matiere:".Net"},
    { id: 1, Jour:"Lundi" , Horaire:"9h00 : 11h00" , Groupe: "ISI4" , Prof :"Prof" , Salle :"B1" , Matiere:".Net"},
    { id: 1, Jour:"Lundi" , Horaire:"9h00 : 11h00" , Groupe: "ISI4" , Prof :"Prof" , Salle :"B1" , Matiere:".Net"},
  ];
    
    return (
        <div className='Dash'>        
           <Sidebar></Sidebar>
           
           <div className='Dash-container'>
               <Navbar></Navbar>
               <div className='Cards'>
                   <Card title="Etudiants" counter="53" icon={<SupervisorAccountRoundedIcon className="icon" style={{color : '#00926E'}}/>} />
                   <Card title="Professeurs"  counter="12"  icon={<SchoolRoundedIcon className="icon" style={{color : '#00926E'}}/>}/>
                   <Card title="Reservation"  counter="5"  icon={<AccessTimeFilledRoundedIcon className="icon" style={{color : '#00926E'}}/>}/>
                   <Card title="Fillieres/Groups"  counter="3/5"  icon={<MenuBookRoundedIcon className="icon" style={{color : '#00926E'}}/>}/>

               </div>
               <h3 className='title'>Historique des modification de Emploi</h3>
               <div className='listReserv'>
               <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[2]}
                        checkboxSelection
                    />
                    </div>
               </div>
           </div>
        </div>
    );
}

export default Dash;