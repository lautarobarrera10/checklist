import React from "react";
import './Tarea.css';

function Tarea({
    text,
    completed,
    completarTarea,
    eliminarTarea
    }){

    // Validamos si la tarea fue completada y cambiamos el ícono en consecuencia
    let checkbox = 'check_box_outline_blank';
    if (completed) {
        checkbox = 'check_box';
    };

    return(
        <li className={`Tarea ${completed && 'TareaCompletada'}`}>
            <span 
            className="material-symbols-outlined BotonDeBorrarTarea"
            onClick={eliminarTarea}
            >
                delete
            </span>
            <p className={`${completed && 'TextoTareaCompletada'}`} >{text}</p>
            <span 
            className={`material-symbols-outlined Checkbox ${completed && 'CheckboxCompletada'}`}
            onClick={completarTarea}
            >
                {checkbox}
            </span>
        </li>
    );
}

export { Tarea };