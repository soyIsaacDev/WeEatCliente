import React, { useRef } from "react";
import { Link } from 'react-router-dom';

import s from "./bienvenida.module.css";

import logo from "./icons/WeEatLogoYellow.png";
import logoChico from "./icons/WeEatLogoChico.png";
import logoBlanco from "./icons/WeEatLogoBN.png";

export default function Bienvenida() {
    const myRef = useRef(null)
 
    //Ayuda a mandar al usuario a una seccion dentro de la misma pagina (en este caso hacia abajo)
    const executeScroll = () => myRef.current.scrollIntoView()    

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
                    {/* <h1 className={s.header_title_container_title}>WeEat</h1> */}
                    <h1 className={s.header_title_container_h1}>
                        Food Ordering App Demo
                    </h1>
                    <p className={s.header_title_container_p}>Happy Testing <span className={s.header_button_span_title}></span></p>
                    <button onClick={executeScroll} className={s.header_button}> Start <span className={s.header_button_span}></span> </button> 
                </div>
            </header>

            <section className={s.food_img_container}>
                <h2 className={s.food_img_container_h2}> Customer, Restaurant and Delivery Front End</h2>
                <p className={s.food_img_container_p}>Supported by its own API</p>
            </section>

            <section className={s.main_instructions_container}>
                <h2 className={s.main_instructions_container_h2}>Users</h2>
                <h3 className={s.main_instructions_container_h3}>Database Restarts Every 24 hours</h3>
                <h3 className={s.main_instructions_container_h3}>Add fresh users</h3>
                
                <section className={s.instructions_container_slider}>

                    <article className={s.instructions_container_card_1}>
                        <h3 className={s.instructions_container_title}>Customer</h3>
                        <section>
                            <Link to= "/AgregarClientes" target="_blank" rel="noopener noreferrer">
                                <button className={s.instructions_container_title_button}>Customer User </button>
                            </Link>
                        </section>
                    </article>

                    <article className={s.instructions_container_card_2}>
                        <p className={s.instructions_container_card_p}>
                            <div ref={myRef}>Start Here</div> 
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

                    <article className={s.instructions_container_card_3}>
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

            <section className={s.main_product_detail}>
                <span className={s.product_detail_logo}>
                </span>
                <div>
                    <h2 className={s.main_product_detail_h2}>Add Data</h2> 
                    <p className={s.main_product_detail_p}>and try this demo</p>
                </div>
            
                <section className="product-cards--container">
                    <article className={s.product_detail_card}>
                        <span className={s.card_icon}>I
                        </span>
                        <h2 className={s.product_detail_card_h2}>Restaurant</h2>
                        <p className={s.product_detail_card_p}>Add a new restaurant</p>
                        <p className={s.product_detail_card_p}>Add some dishes</p>
                        <p className={s.product_detail_card_p}></p>
                    </article> 
                </section>
                <section className="product-cards--container">
                    <article className={s.product_detail_card}>
                        <span className={s.card_icon}>II
                        </span>
                        <h2 className={s.product_detail_card_h2}>Customer</h2>
                        <p className={s.product_detail_card_p}>Explore the App</p>
                        <p className={s.product_detail_card_p}>Place an order</p>
                        <p className={s.product_detail_card_p}></p>
                    </article> 
                </section>
                <section className="product-cards--container">
                    <article className={s.product_detail_card}>
                        <span className={s.card_icon}> III
                        </span>
                        <h2 className={s.product_detail_card_h2}>Restaurant</h2>
                        <p className={s.product_detail_card_p}>Recieve new orders</p>
                        <p className={s.product_detail_card_p}>Process orders</p>
                        <p className={s.product_detail_card_p}>Dispatch Delivery</p>
                    </article> 
                </section>
                <section className="product-cards--container">
                    <article className={s.product_detail_card}>
                        <span className={s.card_icon}> IV
                        </span>
                        <h2 className={s.product_detail_card_h2}>Delivery</h2>
                        <p className={s.product_detail_card_p}>Recieve new delivery</p>
                        <p className={s.product_detail_card_p}>Process delivery</p>
                        <p className={s.product_detail_card_p}></p>
                    </article> 
                </section>
            
            </section>

            <footer>
                    <section className={s.footer_section}>
                        <ul className={s.footer_left_ul}>
                            <li className={s.left_li}>
                                <a  
                                    target="_blank" 
                                    href="https://www.linkedin.com/in/isaacborbondev/"
                                    rel="noopener noreferrer"
                                    className={s.left_a}
                                > 
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className={s.footer_section}>
                        <img 
                            src={logoBlanco} 
                            alt="Logo WeEat 2020"
                            className={s.footer_img}
                        ></img>
                    </section>
                    <section className={s.footer_section_down}>
                        WeEat 2020
                    </section>
                
            </footer>

        </main>

        
    )
}