import React from "react";
import { Link } from 'react-router-dom';

import s from "./navBar.module.css";

import inicio from "./start.png";
import carrito from "./burger-cart.png";
import delivery from "./take-away.png";

export default function NavBar() {
  return (
      <div className={s.navBar}>
          <Link to= "/Restaurantes">
            <button className={s.menu_button}> Inicio
            </button>
          </Link> 
          <Link to= "/Carrito">
            <button className={s.menu_button}> Carrito
            </button>
          </Link>
          <Link to= "/pedido">
            <button className={s.menu_button}> Pedido
            </button>
          </Link>
      </div>
  );
}