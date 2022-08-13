import React from "react";
import { AppContext } from "../AppContext";
import './BotonParaCrearNuevaTarea.css';

function BotonParaCrearNuevaTarea(){
    const { setOpenModal } = React.useContext(AppContext);
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