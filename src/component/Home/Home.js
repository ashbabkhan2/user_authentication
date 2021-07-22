import React from 'react';
import './home.css';
import Header from '../header/Header';
const Home = (props) =>{
  return (
  <div className='Home'>
      <Header user={'Users'} value={true} v={props.logout} admin={'Admin'} log={'Logout'} logout={props.loggedout} title={'DEMOAPP'}/>
       <div class='contents'>
            <h2>Hii, {props.email}</h2>
       </div>
  </div>);
}
export default Home;