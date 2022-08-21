import React from "react";
import { useStorageListener } from "./useStorageListener";
import './StorageChangeAlert.css';

function StorageChangeAlert({sincronizarTareas}) {
    const {storageChange, sincronizarTareasFunction} = useStorageListener(sincronizarTareas);

    if (storageChange) {
        return (
            <div className="StorageChangeAlert-Container">
                <div className="StorageChangeAlert">
                    <p className="StorageChangeAlert-Text">Se realizaron cambios en la lista de tareas en otra pestaña o navegador.</p>
                    <button 
                        className="StorageChangeAlert-Button"
                        onClick={() => sincronizarTareasFunction()}
                    >Sincronizar tareas</button>
                </div>
            </div>
        );
    }
}

export { StorageChangeAlert }