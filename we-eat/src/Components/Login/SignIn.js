import React,{ useState} from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector  } from "react-redux";

import {  postAuth, postLoginSession } from "../../Actions/APIMiddleware";
import s from "./signin.module.css";

export default function SignIn(props) {
    const dispatch = useDispatch();
    
    const [input, setInput] = useState({ username: "", password:""});
    const loginState = useSelector((state) => state.loginState.autenticated);
    const loginResponse = useSelector((state) => state.loginState.Response);
    
    const handleInputChange = function(e){
        setInput({ 
            ...input,  
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log("en Login Onsubmit --> " + JSON.stringify(input))
        dispatch(postAuth(input));
        setTimeout(() => {
            dispatch(postLoginSession(input))
        }, 500);
        
    }
    const location = useLocation();
    console.log(location);
    
    return(
        <div className={s.allwrapper}>
            <div className={s.agregarclientes}>
            <Link to={`/AgregarClientes`}  >
                    Obtener una cuenta  <span className={s.aqui}>aqui</span> 
            </Link>
            </div>
            
            <form onSubmit={onSubmit} className={s.form}>
            <div className={s.title}> Bienvenido </div>
            <div className={s.title}> a </div>
            <div className={s.title}> We-Eat </div>
                <div className={s.respuesta_servidor}>{loginResponse}</div>  
                <input
                    name= 'username'
                    value = {input.username}
                    placeholder="Nombre de Usuario"
                    onChange={(e) =>handleInputChange(e)}
                    className= {s.input}
                />
                <input
                    name= 'password'
                    value = {input.password}
                    placeholder="Contraseña"
                    onChange={(e) =>handleInputChange(e)}
                    className= {s.input}
                    type= "password"
                />

                <input type="submit" className={s.submit}/>
                

                {loginState === "LoggedIn" ? (
                    <Navigate to="/Restaurantes" ></Navigate>
                    ): (
                    <div></div>
                    )
                }
            </form>
            
        </div>
    )
}