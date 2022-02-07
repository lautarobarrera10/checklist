import React from "react";
import './CreateCheckButton.css';

function CreateCheckButton() {
    const newCheck = () => console.log("Nueva tarea.");

    return(
        <button 
            className="CreateCheckButton"
            onClick={newCheck}
        >
            +
        </button>
    );
}

export { CreateCheckButton };