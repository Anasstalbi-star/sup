import React from 'react';
import "../Reservation/Reservation.scss";
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
function Reservation() {
    return (
        <div className='Reservation'>
             <Sidebar></Sidebar>
           
           <div className='Reservation-container'>
               <Navbar></Navbar>
               Reservation
            </div>
        </div>
    );
}

export default Reservation;