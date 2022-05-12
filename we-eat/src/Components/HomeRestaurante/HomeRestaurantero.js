import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./HomeRestaurantero.module.css";
import NavBarRestaurantero from "../NavBar/NavBarRestaurantero";
import { getLoginSession } from "../../Actions/actions";

export default function HomeRestaurantero() {
  var loginState  = useSelector((state) => state.loginState);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoginSession());
  }, []);
  
  return (
    <div>
      <h1>Bienvenido a We-Eat</h1>
      <NavBarRestaurantero></NavBarRestaurantero>
    </div>
   )
}