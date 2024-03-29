// Post a Servidor

import { deleteCart, getPedidos } from "./actions";
import { host } from "../host";


export function addRepartidor(data){
    async function postData(){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
      await fetch(`${host}/repartidor/nuevoRepartidor`, requestOptions)
      };
      postData();       
}

export function addUbicacionRepartidor(data){
    async function postUbicacion(){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
      await fetch(`${host}/repartidor/ubicacionRepartidor`, requestOptions)
      };
      postUbicacion();       
}

export function addClientes(data){
    async function postData(){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
      console.log("agregando Cliente "+ data)
      await fetch(`${host}/clientefinal/agregarclientes`, requestOptions)
      };
      postData();       
}


export function setUser(user) {
    return { 
        type: "SET_USER",
        payload: user
    };
};

export function postAuth(data){
    return function (dispatch){
        const auth = {"username": data.username}
        console.log("Ejecutando setLoginSession L-51 --> "+ auth);
        //dispatch(setUser(auth));
        
        async function postData(){
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
          };     
          await fetch(`${host}/authcliente/login/password`, requestOptions)
          /* .then(response => response.json())
          .then(json => console.log(json)) */
        };    
        postData();
    }
}
export function getLogginSession(session) {
    console.log("getLogginSession APIMiddleware L-71 -->>  "+JSON.stringify(session))
    return { 
        type: "GET_LOGIN",
        payload: session
    };
};

export function postLoginSession(data){
    return function (dispatch){
        async function postData(){
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
          };     
          console.log("getLoginSession L-81"+JSON.stringify(data))
          await fetch(`${host}/authcliente/sesion`, requestOptions)
            .then(response => response.json())
            .then(json => {
                console.log("Session Autenticada L-85 APIMiddleware"+JSON.stringify(json));
                dispatch(getLogginSession(json));
            });
        };    
        postData();
    }
}


export function addPedido(data){
    return function (dispatch){
        console.log("Ejecutando addPedido L-98");
        
        async function postData(){
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
          };     
          await fetch(`${host}/pedidos/agregarpedido`, requestOptions)
          .then(response => response.json())
          /* .then(json => console.log(json.status+json.id)) */
          .then(json => dispatch(getPedidos(json.id)))
          .then(json => dispatch(deleteCart()))
        };    
        postData();
    }
}