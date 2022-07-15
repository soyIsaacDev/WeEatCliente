import React from "react";
import { Routes, Route} from "react-router-dom";

import "./App.css";

import Bienvenida from "./Components/Bienvenida/Bienvenida";
import Restaurantes from "./Components/RestaurantCard/restaurantes";
import RestaurantDetails from "./Components/RestDetails/r-detail";
import DishDetails from "./Components/DishDetails/dish-details";
import Carrito from "./Components/CarritoCompras/carrito";
import Geolocation from "./Components/GeolocationMap/Geolocation";
import AgregarClienteFinal from "./Components/Clientes/AgregarClienteFinal";
import ProtectedRoutes from "./ProtectedRoutes";
import Signin from "./Components/Login/SignIn"
import NavBar from "./Components/NavBar/NavBar";     
import Pedido from "./Components/Pedido/Pedido";
import Mapa from "./Components/Mapa/Mapa";

function App() { 

  return (
    <div className="App">
        <React.Fragment>
            <Routes>
              <Route path="/" element={<Bienvenida/>} />
              <Route path="/Inicio" element={<Signin />} />
              <Route exact path="/AgregarClientes" element = { <AgregarClienteFinal/> } />
              <Route path="/NavBar" element={<NavBar/>} />
                  <Route exact path="/AddGeolocation" element = { <Geolocation/> } />
              <Route exact path="/mapa" element = { <Mapa/> } />
              
              <Route element={<ProtectedRoutes />}>
                  <Route exact path="/Restaurantes" element = { <Restaurantes/> } />
                  <Route path="/RestaurantDetails/:id" element = { <RestaurantDetails/> } />
                  <Route exact path="/DishDetail/:id" element={ <DishDetails/> } />
                  <Route exact path="/Carrito" element = { <Carrito/> } />
                  <Route exact path="/pedido" element = { <Pedido/> } /> 
              </Route>
            </Routes>
        </React.Fragment>
    </div>
  );
}

export default App;
