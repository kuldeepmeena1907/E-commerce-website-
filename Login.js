
import { Button } from '@material-ui/core';
import React,{useState} from 'react';
import './Login.css';
import {Link,useHistory} from 'react-router-dom';
import {auth} from './firebase';


function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const LogIn =(e)=>{
e.preventDefault();
auth.signInWithEmailAndPassword(email,password)
.then((auth)=>{
history.push("/");
}).catch((err)=> alert(err.message));

    };
    const regis= (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/");
        })
        .catch((err)=>alert(err.message));
    };
 
   
    return (
        <div className="login">
          <Link to="/">
          <img className="logo_a"
          src="http://governorwildstar.com/wp-content/uploads/2013/03/Amazon-Logo-f630x378-ffffff-C-f08d0f0c-57039334.jpg"
/>
          </Link>
          <div className="container_log">
          <h1 className="si">Sign In</h1>
              <form>
<h5 className="h55">E-mail</h5>
<input className="ip" value={email} onChange={(e)=>setEmail(e.target.value)} type="email"></input>
<h5 className="h55">Password</h5>
<input className="ip" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"></input>
<button onClick={LogIn} className="sip" type="submit">Sign In</button>
              </form>
              <p className="dis">
              By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
              </p>
              <button  onClick={regis} className="reg" type="submit">Create Your Amazon Account</button>
          </div>
        </div>
    )
}

export default Login;
