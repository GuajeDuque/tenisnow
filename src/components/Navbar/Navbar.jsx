import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget"
const Navbar = () => {
    return(
        <nav>
            <h1 className= "titulo" >Tenisnow E-commerce</h1>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Tienda</a></li>
                <li><a href="#">Clubs</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
          <CartWidget/>
        </nav>
    )
}
export default Navbar;