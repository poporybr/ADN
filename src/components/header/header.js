import React from "react";
import './header.css';
import { Logo } from "./logo/logo";
import { Navbar } from "./navbar/navbar";

export function Header(){
    return <div className="containerHeader">
        <Logo/>
        <Navbar/>
    </div>
}