import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener (props) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === 'TAREAS_V1') {
                setStorageChange(true);
            }
        })

        const sincronizarTareas = () => {
            props.sincronizarTareas();
            setStorageChange(false);
        }

        return (
            <WrappedComponent 
                storageChange={storageChange}
                sincronizarTareas={sincronizarTareas}
            />
        );
    }
}

export { withStorageListener }