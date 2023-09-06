import React from "react";
import './Botao.css';



const Botao = ({children, onClick, className, type})=> {   

    const styleDefault = "btn";

    return(
        <button type={type? type : "button"} className={className? className : styleDefault } onClick={onClick}>{ children }</button>
    )
}

export default Botao;