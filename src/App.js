import React from "react";
import { ContadorDeTareas } from "./ContadorDeTareas";
import { BuscadorDeTareas } from "./BuscadorDeTareas";
import { BotonParaCrearNuevaTarea } from "./BotonParaCrearNuevaTarea";
import { Tarea } from "./Tarea";
import { ListaDeTareas } from "./ListaDeTareas";
import './App.css';

const tareasPorDefecto = [
  { text: 'Esta es una tarea muy larga para ver como se adapta mi aplicación.', completed: true },
  { text: 'Estudiar PHP', completed: false},
  { text: 'Hacer informes', completed: false},
]

function App() {

  // Estado de las tareas
  const [tareas, cambiarTareas] = React.useState(tareasPorDefecto);

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
    const nuevasTareas = [...tareas];
    if (nuevasTareas[tareaIndex].completed){
      // Si la tarea ya está completada la marcamos como no completada
      nuevasTareas[tareaIndex].completed = false;
    } else {
      // Sino la marcamos como completada
      nuevasTareas[tareaIndex].completed = true;
    }
    cambiarTareas(nuevasTareas);
  }

  // Eliminar tarea
  const eliminarTarea = text => {
    const tareaIndex = tareas.findIndex(tarea => tarea.text === text);
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(tareaIndex, 1);
    cambiarTareas(nuevasTareas);
  }

  return (
    <div className="App">
      <ContadorDeTareas 
        totalDeTareas={tareas.length}
        totalTareasCompletadas={tareasCompletadas.length}
      />
      <BuscadorDeTareas 
        valorBusqueda={valorBusqueda}
        cambiarValorBusqueda={cambiarValorBusqueda}
      />
      <ListaDeTareas>
        {tareasBuscadas.map(tarea => (
          <Tarea
          key={tarea.text}
          text={tarea.text}
          completed={tarea.completed}
          completarTarea={() => completarTarea(tarea.text)}
          eliminarTarea={() => eliminarTarea(tarea.text)}
          />
        ))}
      </ListaDeTareas>
      <BotonParaCrearNuevaTarea />
    </div>
  );
}

export default App;
