import React from 'react';
import { CheckCounter } from './CheckCounter';
import { CheckSearch } from './CheckSearch';
import { CheckList } from './CheckList';
import { CheckItem } from './CheckItem.js';
import { CreateCheckButton } from './CreateCheckButton';

const tareas = [
  { text:"Estudiar programación", completed:true },
  { text:"Leer", completed:true },
  { text:"Ir a tirar", completed:false }
]

function App() {
  return (
    <React.Fragment>
      <CheckCounter />
      <CheckSearch />
      <CheckList>
        {tareas.map(tarea => (
          <CheckItem
            text={tarea.text}
            key={tarea.text}
            completed={tarea.completed}
          />
        ))}
      </CheckList>
      <CreateCheckButton />
    </React.Fragment>
  );
}

export default App;
