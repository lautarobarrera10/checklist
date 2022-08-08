import React from "react";
import { ContadorDeTareas } from "./ContadorDeTareas";
import { BuscadorDeTareas } from "./BuscadorDeTareas";
import { BotonParaCrearNuevaTarea } from "./BotonParaCrearNuevaTarea";
import { Tarea } from "./Tarea";
import { ListaDeTareas } from "./ListaDeTareas";
import './App.css';

const tareas = [
  { text: 'Esta es una tarea muy larga para ver como se adapta mi aplicación.', completed: true },
  { text: 'Estudiar PHP', completed: false},
  { text: 'Hacer informes', completed: false},
]

function App() {
  return (
    <div className="App">
      <ContadorDeTareas />
      <BuscadorDeTareas />
      <ListaDeTareas>
        {tareas.map(tarea => (
          <Tarea
          key={tarea.text} 
          text={tarea.text}
          completed={tarea.completed}
          />
        ))}
      </ListaDeTareas>
      <BotonParaCrearNuevaTarea />
    </div>
  );
}

export default App;
