import React from "react";
import './header.css';
import { Logo } from "./logo/logo";
import { Navbar } from "./navbar/navbar";

function Header(){
    return <div className="containerHeader">
        <Logo/>
        <Navbar/>
    </div>
}

export default Header;