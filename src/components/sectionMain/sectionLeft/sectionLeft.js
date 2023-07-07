import React from "react";
import "./sectionLeft.css";
import { Link } from "react-router-dom";

export function Left() {
  return (
    <div className="containerLeft">
        <pre>
          <h1 className="titleLeft">
            Alavanque seu{"\n"}negócio além do{"\n"}físico, conquiste o{"\n"}
            mundo digital
          </h1>
        </pre>
        <pre>
          <p className="paragLeft">
            Não fique para trás, permita que a {"\n"}
            <span className="adnBold">ADN</span> te ajude a conquistar o mundo
            {"\n"}digital e alcançar o topo do mercado virtual!
          </p>
        </pre>
        <Link to="/start"><button className="btnLeft">COMEÇAR</button></Link>
    </div>
  );
}
