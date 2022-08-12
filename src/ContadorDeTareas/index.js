import React from "react";
import './ContadorDeTareas.css';

function ContadorDeTareas({totalDeTareas, totalTareasCompletadas}){
    return(
        <h2 className="ContadorDeTareas">Completaste {totalTareasCompletadas} de {totalDeTareas} tareas</h2>
    );
}

export { ContadorDeTareas };