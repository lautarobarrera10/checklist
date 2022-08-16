import React from "react";
import './FormularioAgregarTarea.css';

function FormularioAgregarTarea({setOpenModal, agregarTarea}) {
    // Estado para el textarea vacío
    const [ textareaVacio, setTextareaVacio ] = React.useState(false);

    // Estado para el textarea
    const [ valorNuevaTarea, setValorNuevaTarea] = React.useState('');

    // Función que se ejecuta cuando hay un cambio en el textarea
    const onChange = event => {
        // Actualizamos el estado de textarea
        setValorNuevaTarea(event.target.value);
    }

    // Función que se ejecuta cuando hacemos click en "Agregar tarea"
    const onSubmit = event => {
        // prevent default para evitar recargar la página
        event.preventDefault();

        // Validamos que haya contenido en el textarea
        if (valorNuevaTarea) {
            // Actualizamos el estado de textarea vacío
            setTextareaVacio(false);

            // Actulizamos el estado de las tareas globalmente
            agregarTarea(valorNuevaTarea);

            // Cerramos el modal
            setOpenModal(false);
        } else {
            // Actualizamos el estado de textarea vacío
            setTextareaVacio(true);
        }
    }

    return (
        <form onSubmit={onSubmit} className="FormularioAgregarTarea">
            <label className="formulario-text formulario-text-title">Escribe tu nueva tarea</label>
            {
            // Si el estado de textarea vacío es true avisamos que no se puede agregar una tarea vacía
            textareaVacio && (
                <label className="formulario-text formulario-text-danger">No se puede agregar una tarea vacía</label>
            )}
            <textarea 
            placeholder="Escribe tu nueva tarea..."
            valorNuevaTarea={valorNuevaTarea}
            onChange={onChange}
            />
            <div className="agregartarea-buttons-container">
                <button 
                type="button"
                className="agregartarea-button agregartarea-button-cancelar"
                // Al hacer click cerramos el modal
                onClick={() => setOpenModal(false)} 
                >
                    Cancelar
                </button>
                <button 
                type="submit"
                className="agregartarea-button agregartarea-button-agregar"
                >
                    Agregar tarea
                </button>
            </div>
        </form>
    );
}

export { FormularioAgregarTarea };