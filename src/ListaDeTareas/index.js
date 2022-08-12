import React from "react";
import './ListaDeTareas.css';

function ListaDeTareas(props){
    return(
        <ul className="ListaDeTareas">
            {props.children}
        </ul>
    );
}

export { ListaDeTareas };