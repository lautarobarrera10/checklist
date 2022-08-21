import React from "react";

function useStorageListener(sincronizarTareas) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'TAREAS_V1') {
            setStorageChange(true);
        }
    })

    const sincronizarTareasFunction = () => {
        sincronizarTareas();
        setStorageChange(false);
    }

    return {
        storageChange,
        sincronizarTareasFunction,
    }
}

export { useStorageListener }