import React  from 'react';
import logo from '../Login/logo.png';
import '../Login/Login.scss';
import {  useNavigate } from "react-router-dom";
function Login() {
    let navigate = useNavigate();
    return (
        <div> 
   
        <div className="container" id="container" >
                        <div className="form-container sign-in-container">
                            <form action="#">
                                <img className='img-logo' src={logo} ></img>
                                <input className='field' type="usename" placeholder="Usename" required/>
                                <input className='field' type="password" placeholder="Password" required />                  
                                <a href="#">Mot de pass oublier ?</a>
                                <button onClick={() => {
                                    navigate("/Dash")
                                } }>Se connecter</button>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-right">
                                    <h1>Bienvenu</h1>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default Login;

