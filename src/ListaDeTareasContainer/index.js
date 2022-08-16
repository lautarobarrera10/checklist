import React from "react";
import './ListaDeTareasContainer.css';

function ListaDeTareasContainer({children}){
    return(
        <section className="ListaDeTareasContainer">
            {children}
        </section>
    )
}

export { ListaDeTareasContainer }