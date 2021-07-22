import React from 'react';
import './header.css';

const Header = (props) =>{
  return(
     <div className='header'>
         <div className='brand'>
        <h1 className='h1-header'>{props.title}</h1>
        </div>
       {
       props.value && <ul className='nav-body'>
             <li><a href='#'>{props.user}</a></li>
             <li><a href='#'>{props.admin}</a></li>
             <li><a href='#' onClick={props.v} id='logout-1'>{props.log}</a></li>
        </ul>
        }
     </div>
  );
}
export default Header;