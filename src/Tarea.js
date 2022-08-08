import React from "react";
import './Tarea.css';

function Tarea(props){
    let checkbox = 'check_box_outline_blank';
    if (props.completed) {
        checkbox = 'check_box';
    };
    return(
        <li className={`Tarea ${props.completed && 'TareaCompletada'}`}>
            <span className={`material-symbols-outlined Checkbox ${props.completed && 'CheckboxCompletada'}`}>{checkbox}</span>
            <p className={`${props.completed && 'TextoTareaCompletada'}`} >{props.text}</p>
            <span className="material-symbols-outlined BotonDeBorrarTarea">delete</span>
        </li>
    );
}

export { Tarea };