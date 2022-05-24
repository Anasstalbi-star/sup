import React from 'react';
import "./Card.scss";
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';



function Card (props){
   

    return (
        <div className='Card'>
           <div className='left'>
               <span className='titre'>{props.title}</span>
               <span className='link'>{props.link}</span>
           </div>
           <div className='right'>
             {props.icon}
             <span className='counter'>{props.counter}</span>
           </div>
        </div>
    );
}

export default Card;