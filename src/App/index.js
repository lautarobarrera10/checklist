import React from "react";

// Importamos nuestro Custom Hook para Local Storage
import { useLocalStorage } from "../customHooks/useLocalStorage";

// Importamos la UI de nuestra APP
import { AppUI } from './AppUI';

// const tareasPorDefecto = [
//   { text: 'Esta es una tarea muy larga para ver como se adapta mi aplicación.', completed: true },
//   { text: 'Estudiar PHP', completed: false},
//   { text: 'Hacer informes', completed: false},
// ]



function App() {
  // Usamos nuestro Custom Hook para Local Storage
  const [tareas, guardarTareas] = useLocalStorage('TAREAS_V1', []);

  // Estado del buscador
  const [valorBusqueda, cambiarValorBusqueda] = React.useState('');

  // Tareas completadas
  const tareasCompletadas = tareas.filter(tarea => tarea.completed);

  // Filtrar tareas con el buscador
  let tareasBuscadas;

  if (!valorBusqueda >= 1){

    // Si no se busca nada se muestran todas las tareas
    tareasBuscadas = tareas;

  } else {

    // Si se escribe algo en el buscador se filtran los resultados
    tareasBuscadas = tareas.filter(tarea => {

      // Convertimos el texto de las tareas y la búsqueda a minusculas
      const textoTarea = tarea.text.toLowerCase();
      const textoValorBusqueda = valorBusqueda.toLowerCase();

      // Retornamos las tareas que coinciden con la búsqueda
      return textoTarea.includes(textoValorBusqueda);

    })
  }

  // Completar tarea
  const completarTarea = text => {
    const tareaIndex = tareas.findIndex(tarea => tarea.text === text);
    const newItem = [...tareas];
    if (newItem[tareaIndex].completed){
      // Si la tarea ya está completada la marcamos como no completada
      newItem[tareaIndex].completed = false;
    } else {
      // Sino la marcamos como completada
      newItem[tareaIndex].completed = true;
    }
    guardarTareas(newItem);
  }

  // Eliminar tarea
  const eliminarTarea = text => {
    const tareaIndex = tareas.findIndex(tarea => tarea.text === text);
    const newItem = [...tareas];
    newItem.splice(tareaIndex, 1);
    guardarTareas(newItem);
  }

  return (
    <AppUI 
    tareas={tareas}
    tareasBuscadas={tareasBuscadas}
    completarTarea={completarTarea}
    eliminarTarea={eliminarTarea}
    tareasCompletadas={tareasCompletadas}
    valorBusqueda={valorBusqueda}
    cambiarValorBusqueda={cambiarValorBusqueda}
    />
  );
}

export default App;
