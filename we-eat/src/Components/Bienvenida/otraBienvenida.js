import React from "react";
import { Link } from 'react-router-dom';

import s from "./otrabienvenida.module.css";

import logo from "./icons/LogoWeEat.png"
import eye from "./icons/eye 1.svg";

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
                <h3 className={s.main_instructions_container_h3}>Database Restarts Every 24 hours</h3>
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

            <section className={s.main_product_detail}>
                <span className={s.product_detail_logo}>
                </span>
                <div className="product-detail--title">
                    <h2 className={s.main_product_detail_h2}>Add Data</h2> 
                    <p className={s.main_product_detail_p}>and try this demo</p>
                </div>
            
                <section className="product-cards--container">
                    <article className={s.product_detail_card}>
                        <span className={s.card_icon}>
                            <img src={eye} alt="eye"></img>
                        </span>
                        <h2 className={s.product_detail_card_h2}>Restaurant</h2>
                        <p className={s.product_detail_card_p}>Add a new restaurant</p>
                        <p className={s.product_detail_card_p}>Add some dishes</p>
                        <p className={s.product_detail_card_p}></p>
                    </article> 
                </section>
                <section className="product-cards--container">
                    <article className={s.product_detail_card}>
                        <span className={s.card_icon}>
                            <img src={eye} alt="eye"></img>
                        </span>
                        <h2 className={s.product_detail_card_h2}>Customer</h2>
                        <p className={s.product_detail_card_p}>Explore the App</p>
                        <p className={s.product_detail_card_p}>Place an order</p>
                        <p className={s.product_detail_card_p}></p>
                    </article> 
                </section>
                <section className="product-cards--container">
                    <article className={s.product_detail_card}>
                        <span className={s.card_icon}>
                            <img src={eye} alt="eye"></img>
                        </span>
                        <h2 className={s.product_detail_card_h2}>Restaurant</h2>
                        <p className={s.product_detail_card_p}>Recieve new orders</p>
                        <p className={s.product_detail_card_p}>Procces orders</p>
                        <p className={s.product_detail_card_p}>Send to Delivery</p>
                    </article> 
                </section>
                <section className="product-cards--container">
                    <article className={s.product_detail_card}>
                        <span className={s.card_icon}>
                            <img src={eye} alt="eye"></img>
                        </span>
                        <h2 className={s.product_detail_card_h2}>Delivery</h2>
                        <p className={s.product_detail_card_p}>Recieve new delivery</p>
                        <p className={s.product_detail_card_p}>Procces delivery</p>
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
                                    href="https://www.linkedin.com/in/isaac-borbon-369119b3/"
                                    rel="noopener noreferrer"
                                    className={s.left_a}
                                > 
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className={s.footer_section}>
                        <img src={logo} alt="Logo WeEat 2020"></img>
                    </section>
                    <section className={s.footer_section_down}>
                        WeEat 2020
                    </section>
                
            </footer>

        </main>

        
    )
}