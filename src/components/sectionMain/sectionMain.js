import React from "react";
import './sectionMain.css'
import { Right } from "./sectionRight/sectionRight";
import { Left } from "./sectionLeft/sectionLeft";

function SectionMain(){
    return <div className="containerMain">
        <Left/>
        <Right/>
    </div>
};

export default SectionMain;