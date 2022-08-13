import React from "react";
import { ContadorDeTareas } from "../ContadorDeTareas";
import { BuscadorDeTareas } from "../BuscadorDeTareas";
import { BotonParaCrearNuevaTarea } from "../BotonParaCrearNuevaTarea";
import { Tarea } from "../Tarea";
import { ListaDeTareas } from "../ListaDeTareas";
import './App.css';
import { AppContext } from "../AppContext";

function AppUI() {
    const {
        error, 
        loading, 
        tareasBuscadas, 
        completarTarea, 
        eliminarTarea,
    } = React.useContext(AppContext);
    return(
        <div className="App">
            <ContadorDeTareas />
            <BuscadorDeTareas />
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