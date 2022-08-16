import React from "react";
import './BotonParaCrearNuevaTarea.css';

function BotonParaCrearNuevaTarea({setOpenModal}){
    return(
        <button 
        className="BotonParaCrearNuevaTarea"
        onClick={() => setOpenModal(true)}
        >
            Agregar tarea
        </button>
    );
}

export { BotonParaCrearNuevaTarea };