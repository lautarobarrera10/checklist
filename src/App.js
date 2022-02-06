import React from 'react';
import { CheckCounter } from './CheckCounter';
import { CheckSearch } from './CheckSearch';
import { CheckList } from './CheckList';
import { CheckItem } from './CheckItem.js';
import { CreateCheckButton } from './CreateCheckButton';

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
    <React.Fragment>
      <CheckCounter
        total={totalTareas}
        completed={tareasCompletadas}
      />
      <CheckSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <CheckList>
        {searchedTareas.map(tarea => (
          <CheckItem
            text={tarea.text}
            key={tarea.text}
            completed={tarea.completed}
            toggleCompleteTarea={() => toggleCompleteTarea(tarea.text)}
            onDelete={() => onDelete(tarea.text)}
          />
        ))}
      </CheckList>
      <CreateCheckButton />
    </React.Fragment>
  );
}

export default App;
