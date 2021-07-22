import React, { useState,useEffect } from 'react';
import Header from '../header/Header';
import './login.css';
const Login = (props) =>{
    const [isvalid,setisvalid] = useState(false);
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    // run on changing email
    const on_change_email = (e) =>{
        setemail(e.target.value);
    }
    // run on changing password
    const on_change_password = (e) =>{
        setpassword(e.target.value);
       
    }
    useEffect(()=>setisvalid(password.trim().length>6 && email.includes('@')),[on_change_email,on_change_password]);
  return(
     <React.Fragment>
            <Header value={false} className='aaa' title={'Demo-app'}/>
            <div className='Login'>
          <form onSubmit={()=>{props.login(email,password)}}>
              <div className={`emails first ${isvalid===true?'':'abc'}`}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' onChange={on_change_email} placeholder='Enter your email'/></div>
               {!isvalid &&<p className='p'>Please include @ in the email</p>}
              <div className={`emails  ${isvalid===true?'':'abc'}`}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' onChange={on_change_password} placeholder='Enter your password'/></div>
               {!isvalid && <p className={ `${!isvalid?'aa':''}`}>Please include atleast 6 digit</p>} 
              <div className='buttons'>
             {isvalid && <button type='submit' >Login</button>}
             {!isvalid && <button type='submit' disabled>Login</button>}
             </div>
          </form>
          </div>
     </React.Fragment>
  );
}
export default Login;