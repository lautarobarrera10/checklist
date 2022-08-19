import React from "react";
import './ContadorDeTareas.css';

function ContadorDeTareas({totalDeTareas, totalTareasCompletadas, loading}){
    return(
        <h2 className={`ContadorDeTareas ${!!loading && 'ContadorDeTareas-Loading'}`}>Completaste {totalTareasCompletadas} de {totalDeTareas} tareas</h2>
    );
}

export { ContadorDeTareas };