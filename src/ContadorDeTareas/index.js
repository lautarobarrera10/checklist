import React from "react";
import { AppContext } from "../AppContext";
import './ContadorDeTareas.css';

function ContadorDeTareas(){
    const {totalDeTareas, totalTareasCompletadas} = React.useContext(AppContext);
    return(
        <h2 className="ContadorDeTareas">Completaste {totalTareasCompletadas} de {totalDeTareas} tareas</h2>
    );
}

export { ContadorDeTareas };