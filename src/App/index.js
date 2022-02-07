import React from 'react';
import { AppUI } from './AppUI';

const defaultTareas = [
  { text:"Estudiar programación", completed:true },
  { text:"Leer", completed:false },
  { text:"Ir a tirar", completed:false }
]

function App() {
  const [ tareas, setTareas ] = React.useState(defaultTareas);
  const [ searchValue, setSearchValue] = React.useState('');

  const tareasCompletadas = tareas.filter(tarea => tarea.completed).length;
  const totalTareas = tareas.length;

  let searchedTareas = [];

  if (!searchValue.length >= 1 ) {
    searchedTareas = tareas;
  } else {
    searchedTareas = tareas.filter(tarea => {
      const tareaText = tarea.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return tareaText.includes(searchText);
    });
  }

  const toggleCompleteTarea = text => {
    const tareaIndex = tareas.findIndex(tarea => tarea.text === text);
    const newTareas = [...tareas];
    newTareas[tareaIndex].completed = !newTareas[tareaIndex].completed;
    setTareas(newTareas);
  }

  const onDelete = text => {
    const tareaIndex = tareas.findIndex(tarea => tarea.text === text);
    const newTareas = [...tareas];
    newTareas.splice(tareaIndex, 1);
    setTareas(newTareas);
  }

  return (
    <AppUI 
      totalTareas={totalTareas}
      tareasCompletadas={tareasCompletadas}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTareas={searchedTareas}
      toggleCompleteTarea={toggleCompleteTarea}
      onDelete={onDelete}
    />
  );
}

export default App;
