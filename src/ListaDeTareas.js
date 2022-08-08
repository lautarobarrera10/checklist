import React from "react";

function ListaDeTareas(props){
    return(
        <ul>
            {props.children}
        </ul>
    );
}

export { ListaDeTareas };