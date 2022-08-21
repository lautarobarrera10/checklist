import React from "react";
import { withStorageListener } from "./withStorageListener";
import './StorageChangeAlert.css';

function StorageChangeAlert({storageChange, sincronizarTareas}) {
    if (storageChange) {
        return (
            <div className="StorageChangeAlert-Container">
                <div className="StorageChangeAlert">
                    <p className="StorageChangeAlert-Text">Se realizaron cambios en la lista de tareas en otra pestaña o navegador.</p>
                    <button 
                        className="StorageChangeAlert-Button"
                        onClick={() => sincronizarTareas()}
                    >Sincronizar tareas</button>
                </div>
            </div>
        );
    }
}

const StorageChangeAlertWithStorageListener = withStorageListener(StorageChangeAlert);

export { StorageChangeAlertWithStorageListener }