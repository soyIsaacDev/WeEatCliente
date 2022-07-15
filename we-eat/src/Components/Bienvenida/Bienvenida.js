import React from "react";

import s from "./bienvenida.module.css";

export default function Bienvenida() {
    return(
        <div className={s.container}>
            <div className={s.header_container}>
                {/* <img 
                    src={logo}
                    alt="Logo WeEat"
                    className={s.logo}
                >
                </img> */}
                <div className={s.header}>WeEat Food!</div>

            </div>
            <img 
                src="https://d1hdnpfpyy58x9.cloudfront.net/uploads/images/landings/40/b9/un-chef-a-domicilio-sirviendo-un-plato-durante-una-experiencia-take-a-chef-en-ciudad-de-mexico.jpg,w_1200,h_556,c_1,q_85,fd_0,e_.webp" 
                alt="Chef Offering Food"
                className={s.image}>
            </img>
            <div className={s.info_container_wrapper}>
                <div className={s.info_container_title}>
                    <div className={s.ctp}>This is a demo for our food ordering App</div>
                    <div className={s.ctp}>Happy Testing :) </div>
                </div>
                <div className={s.info_container}>
                    <p></p>
                    <div className={s.p}>This demo database restarts every 24 hours so you'll need to add
                        restaurants, dishes, delivery and customers to use the full demo.
                    </div>
                    <div className={s.p}>Please start by adding a restaurant user
                        <a target="_blank"href="https://weeat-restaurantes.onrender.com/agregarclientes"
                         rel="noopener noreferrer"> Here
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}