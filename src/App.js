import React from "react";
import { ContadorDeTareas } from "./ContadorDeTareas";
import { BuscadorDeTareas } from "./BuscadorDeTareas";
import { BotonParaCrearNuevaTarea } from "./BotonParaCrearNuevaTarea";
import { Tarea } from "./Tarea";
import { ListaDeTareas } from "./ListaDeTareas";
// import './App.css';

const tareas = [
  { text: 'Estudiar React', completed: false },
  { text: 'Estudiar PHP', completed: false},
  { text: 'Hacer informes', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <ContadorDeTareas />
      <BuscadorDeTareas />
      <ListaDeTareas>
        {tareas.map(tarea => (
          <Tarea key={tarea.text} text={tarea.text} />
        ))}
      </ListaDeTareas>
      <BotonParaCrearNuevaTarea />
    </React.Fragment>
  );
}

export default App;
