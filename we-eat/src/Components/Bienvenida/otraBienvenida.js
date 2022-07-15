import React from "react";
import { Link } from 'react-router-dom';
import s from "./otrabienvenida.module.css";
import logo from "./icons/LogoWeEat.png"

export default function OtraBienvenida() {
    return(
        <main>
            <header>
                <img 
                    src={logo}
                    alt="Logo WeEat"
                    className={s.header_img}
                >
                </img>
                <div className={s.header_title_container}>
                    <h1 className={s.header_title_container_title}>WeEat</h1>
                    <h1 className={s.header_title_container_h1}>
                        Food Ordering App Demo
                    </h1>
                    <p className={s.header_title_container_p}>Happy Testing <span className={s.header_button_span_title}></span></p>
                    <Link to="#instructions" className={s.header_button}>How to<span className={s.header_button_span}></span></Link>
                </div>
            </header>

            <section className={s.food_img_container}>
                <h2 className={s.food_img_container_h2}> Customer, Restaurant and Delivery Front End</h2>
                <p className={s.food_img_container_p}>Supported by its own API</p>
            </section>

            <section id="instructions" className={s.main_instructions_container}>
                <h2 className={s.main_instructions_container_h2}>Users</h2>
                <h3 className={s.main_instructions_container_h3}>Database Restarts every 24 hours</h3>
                <h3 className={s.main_instructions_container_h3}>Add fresh users</h3>
                {/* <h3 className={s.main_instructions_container_h3}>And add restaurants, dishes</h3>
                <h3 className={s.main_instructions_container_h3}> delivery and customers</h3> */}
                
                <section className={s.instructions_container_slider}>

                    <article className={s.instructions_container_card}>
                        <h3 className={s.instructions_container_title}>Customer</h3>
                        <section>
                            <Link to= "/AgregarClientes" target="_blank" rel="noopener noreferrer">
                                <button className={s.instructions_container_title_button}>Customer User </button>
                            </Link>
                            
                        </section>
                    </article>

                    <article className={s.instructions_container_card}>
                        <p className={s.instructions_container_card_p}>Start Here
                        </p>
                        <h3 className={s.instructions_container_title}>Restaurants</h3>
                        <section>
                            <button className={s.instructions_container_title_button}>
                                <a  target="_blank" 
                                    href="https://weeat-restaurantes.onrender.com/agregarclientes"
                                    rel="noopener noreferrer"> 
                                        Restaurant User
                                </a>
                            </button>
                        </section>
                    </article>

                    <article className={s.instructions_container_card}>
                        <h3 className={s.instructions_container_title}>Delivery</h3>
                        <section>
                        <button className={s.instructions_container_title_button}>
                                <a  target="_blank" 
                                    href="https://weeat-restaurantes.onrender.com/agregarclientes"
                                    rel="noopener noreferrer"> 
                                        Delivery User
                                </a>
                            </button>
                        </section>
                    </article>
                </section>

            </section>

        </main>
    )
}