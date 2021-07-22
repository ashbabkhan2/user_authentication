import React ,{useState} from 'react';
import Home from './component/Home/Home';
import Header from './component/header/Header';
import Login from './component/login/Login';
const App = () =>{
  const [isloggedin,setisloggedin]=useState(false);
  const [email,setemail]=useState('');
  const [password,setpassword] =useState('');
  const loggedin = (email,password) =>{
    setemail(email);
    setpassword(password);
    setisloggedin(true);
    console.log(email,password)
  }
  const loggedout = () =>{
    setisloggedin(false);
  }
   return(
     <React.Fragment>
       {isloggedin && <Home email={email} pass={password} logout={loggedout}/>}
       {!isloggedin && <Login login={loggedin}/>}   
     </React.Fragment>
   );
}
export default App;