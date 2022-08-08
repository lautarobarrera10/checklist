import React from "react";

function Tarea(props){
    return(
        <li>
            <p>{props.text}</p>
        </li>
    );
}

export { Tarea };