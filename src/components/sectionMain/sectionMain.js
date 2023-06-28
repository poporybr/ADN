import React from "react";
import './sectionMain.css'
import { Right } from "./sectionRight/sectionRight";
import { Left } from "./sectionLeft/sectionLeft";

export function SectionMain(){
    return <div className="containerMain">
        <Left/>
        <Right/>
    </div>
};