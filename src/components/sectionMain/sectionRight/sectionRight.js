import React from "react";
import "./sectionRight.css";
import imgFoguete from "../../../assets/foguete.png";


export function Right() {
  return (
    <div className="containerRight">
        <img src={imgFoguete} alt="foguete" className="fogueteADN" />
    </div>
  );
}
