// Custom Hook para Local Storage
import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));

  const {
    sincronizedItem,
    error,
    loading,
    item,
  } = state;

  // ACTION CREATORS
  const onError = (error) => {
    dispatch({
      type: actionType.error, 
      payload: error,
    });
  };

  const onSuccess = (parsedItem) => {
    dispatch({
      type: actionType.success, 
      payload: parsedItem,
    });
  };

  const onSave = (item) => {
    dispatch({
      type: actionType.save, 
      payload: item,
    });
  }
  const onSincronize = () => {
    dispatch({
      type: actionType.sincronize,
    });
  }


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

        onSuccess(parsedItem);

      } catch (error) {
        onError(error);
      }
    }, 1000)
  }, [sincronizedItem]);
  
  // Función para guardar item tanto en Local Storage como en el estado
  const saveItem = newItem => {
    // Envolvemos el código en un try/catch para capturar errores.
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem)
    } catch (error) {
      onError(error);
    }  
  };
  
  return {
    error,
    loading,
    item,
    saveItem,
    sincronizeItem: onSincronize,
  };
};

const initialState = ({initialValue}) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionType = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
  [actionType.error]: {
    ...state,
    error: true,
  },
  [actionType.success]: {
    ...state,
    loading: false,
    error: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionType.save]: {
    ...state,
    item: payload,
  },
  [actionType.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage }