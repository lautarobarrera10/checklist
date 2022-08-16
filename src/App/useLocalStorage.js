// Custom Hook para Local Storage
import React from "react";

function useLocalStorage(itemName, initialValue) {

  // Estado de error
  const [error, setError] = React.useState(false);
  // Estado de loading
  const [loading, setLoading] = React.useState(true);
  // Estado del item
  const [item, setItem] = React.useState(initialValue);


  // Envolvemos el código dentro de de useEffect para manejar los efectos loading y error.
  React.useEffect(() => {
    // Envolvemos nuestro código en un setTimeout para simular el tiempo que podemos demorar en consultar la API.
    setTimeout(() => {
      // Envolvemos el código en un try/catch para capturar errores.
      try {
        // Intentamos traer el item desde Local Storage y declaramos la variable donde vamos a guardar item parseado
        const itemEnLocalStorage = localStorage.getItem(itemName);
        let parsedItem;

        if (!itemEnLocalStorage) {
          // Si no existe el item en Local Storage, lo creamos y lo guardamos en nuestra variable.
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          // Si el item existe en Local Stora lo guardamos en nuestra variable.
          parsedItem = JSON.parse(itemEnLocalStorage);
        }

        // Guardamos el valor del item de Local Storage en el estado del item.
        setItem(parsedItem);

        // Actualizamos el estado de loading
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000)
  })
  
  // Función para guardar item tanto en Local Storage como en el estado
  const saveItem = newItem => {
    // Envolvemos el código en un try/catch para capturar errores.
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }  
  }
  
  return {
    error,
    loading,
    item,
    saveItem,
  }
}

export { useLocalStorage }