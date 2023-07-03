import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

export function Navbar() {
    return (
      <div className="containerNavbar">
        <Link className="linkNavbar" to="/">INICIO</Link>
  
        <Link className="linkNavbar" to="/products">PRODUTOS</Link>
  
        <Link className="linkNavbar" to="/about">SOBRE NÓS</Link>
  
        <Link className="linkNavbar" to="/contact">CONTATO</Link>
      </div>
    );
  }