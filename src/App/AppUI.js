import React from "react";
import { ContadorDeTareas } from "../ContadorDeTareas";
import { BuscadorDeTareas } from "../BuscadorDeTareas";
import { BotonParaCrearNuevaTarea } from "../BotonParaCrearNuevaTarea";
import { Tarea } from "../Tarea";
import { ListaDeTareas } from "../ListaDeTareas";
import './App.css';

function AppUI({
    loading,
    error,
    tareas,
    tareasBuscadas,
    completarTarea,
    eliminarTarea,
    tareasCompletadas,
    valorBusqueda,
    cambiarValorBusqueda
}) {
    return(
        <div className="App">
            <ContadorDeTareas 
                totalDeTareas={tareas.length}
                totalTareasCompletadas={tareasCompletadas.length}
            />
            <BuscadorDeTareas 
                valorBusqueda={valorBusqueda}
                cambiarValorBusqueda={cambiarValorBusqueda}
            />
            <ListaDeTareas>
                {error && <p>Hubo un error...</p>}
                {loading && <p>Estamos cargando...</p>}
                {(!loading && !tareasBuscadas.length) && <p>¡Crea tu primer tarea!</p>}

                {tareasBuscadas.map(tarea => (
                <Tarea
                key={tarea.text}
                text={tarea.text}
                completed={tarea.completed}
                completarTarea={() => completarTarea(tarea.text)}
                eliminarTarea={() => eliminarTarea(tarea.text)}
                />
                ))}
            </ListaDeTareas>
            <BotonParaCrearNuevaTarea />
        </div>
    );
}

export { AppUI }