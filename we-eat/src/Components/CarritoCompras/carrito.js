import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import s from "./carrito.module.css";
import Articulo from "./ArticulosCarrito/Articulo";
import { addPedido } from "../../Actions/APIMiddleware";


export default function Carrito_Compras() {
  const dispatch = useDispatch();

  const restaurant = useSelector((state)=> state.loadedRestDetails)
  const carrito = useSelector((state)=> state.carrito);
  const clienteId = useSelector((state) => state.loginState.ClientefinalId)
  const [tipoEntrega, setTipoEntrega] = useState({ tipo_de_Entrega: ""});
  let navigate = useNavigate();

  var subtotal = 0;
  carrito.map((c)=>{
    subtotal = subtotal + c.precio;
    return subtotal;
  })

  const handleSelectChange = function(e){
    setTipoEntrega(e.target.value);
};
  function handleClick(e){
    carrito.map((i)=>{
      var pedido = {
        cantidad: i.cantidad,
        nombrePlatillo: i.nombrePlatillo,
        notas: "Sin Mantequilla",
        idCliente: clienteId,
        idRestaurant: restaurant.id,
        status: "Colocado",
        tipo_de_Entrega: tipoEntrega
      };
      dispatch(addPedido(pedido));
      console.log("Colocar Pedido " + JSON.stringify(pedido));
      navigate("/Pedido", { replace: false });
      return pedido;
    });
  }

  return (
    <div className={s.allwrapper}>
      <div className={s.wrapper}>
        <div className={s.namewrapper}>
            <div className={s.name}>{restaurant.nombre}</div>
        </div>
         
        <div className={s.articulo}>
          <Articulo></Articulo>
        </div>
        <div className={s.SubtotalW}>
            <div className={s.subtotal}>Subtotal</div>
            <div className={s.cantidad}>${subtotal}.00</div>
        </div>
        <label className={s.etiqueta}>Tipo de Pedido</label>
            <select className={s.selection}
                id="tipo_de_Entrega"
                name="tipo_de_Entrega"
                value={tipoEntrega.tipo_de_Entrega}
                onChange={(e) => handleSelectChange(e)}
                >
                    <option value="">Selecciona tu modo de entrega</option>
                    <option value="Entrega">Entrega</option>
                    <option value="Recoleccion">Recoleccion</option>
            </select>     
        <button className={s.pagar} onClick={(e) => handleClick(e)}>Pagar</button>    
      </div>
    </div>
  );
}
