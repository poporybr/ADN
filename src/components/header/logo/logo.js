import React from "react";
import './logo.css'
import logo from "../../../assets/logo.png";

export function Logo(){
    return <div className="containerLogo">
        <img className="logoImg" src={logo} alt="Logo ADN"/>
        <h1 className="titleLogo">ADN | ALMA DO NEGÓCIO</h1>
    </div>
}

