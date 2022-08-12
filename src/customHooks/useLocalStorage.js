// Custom Hook para Local Storage
import React from "react";

function useLocalStorage(itemName, initialValue) {
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
  
    // Estado del item
    const [item, setItem] = React.useState(parsedItem);
  
    // Función para guardar item tanto en Local Storage como en el estado
    const saveItem = newItem => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    }
  
    return [
      item,
      saveItem
    ];
  }

export { useLocalStorage }