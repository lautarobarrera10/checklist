import React from "react";
import { AppContext } from "../AppContext";
import './BuscadorDeTareas.css';

function BuscadorDeTareas(){
    const {valorBusqueda, cambiarValorBusqueda} = React.useContext(AppContext);

    // Acción que ocurre cuando se escribe algo en el buscador
    const cambioEnElBuscador = (evento) => {
        cambiarValorBusqueda(evento.target.value);
    }

    return(
        <input 
        className="BuscadorDeTareas" 
        placeholder="Buscar tarea..." 
        value={valorBusqueda}
        onChange={cambioEnElBuscador}
        />
    );
}

export { BuscadorDeTareas };