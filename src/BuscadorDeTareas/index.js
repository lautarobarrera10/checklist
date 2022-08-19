import React from "react";
import './BuscadorDeTareas.css';

function BuscadorDeTareas({valorBusqueda, cambiarValorBusqueda, loading}){
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
        disabled={loading}
        />
    );
}

export { BuscadorDeTareas };