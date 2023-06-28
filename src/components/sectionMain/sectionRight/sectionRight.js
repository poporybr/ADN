import React from "react";
import "./sectionRight.css";
import imgLogo from "../../../assets/logo.png";


export function Right() {
  return (
    <div className="containerRight">
        <img src={imgLogo} alt="LogoADN" className="logoADN" />
        <h1 className="titleRight">NÓS SOMOS A ALMA DO NEGÓCIO</h1>
    </div>
  );
}
