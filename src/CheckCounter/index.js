import React from 'react';
import './CheckCounter.css';

function CheckCounter({ total, completed }) {
    return(
        <div className='CheckCounter'>
            <h1>¡Hola, Lautaro!</h1>
            <h2>Completaste {completed} de {total} tareas.</h2>
        </div>
    );
}

export { CheckCounter };