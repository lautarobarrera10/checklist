import React from "react";
import { Header } from "../Header";
import { ContadorDeTareas } from "../ContadorDeTareas";
import { BuscadorDeTareas } from "../BuscadorDeTareas";
import { ListaDeTareasContainer } from "../ListaDeTareasContainer";
import { Tarea } from "../Tarea";
import { ListaDeTareas } from "../ListaDeTareas";
import { BotonParaCrearNuevaTarea } from "../BotonParaCrearNuevaTarea";
import { Modal } from "../Modal";
import { FormularioAgregarTarea } from "../FormularioAgregarTarea";

import { useApp } from "./useApp";

function App() {
  const {
    error, 
    loading, 
    tareasBuscadas, 
    completarTarea, 
    eliminarTarea,
    openModal,
    totalDeTareas, 
    totalTareasCompletadas,
    valorBusqueda, 
    cambiarValorBusqueda,
    setOpenModal,
    agregarTarea,
  } = useApp();
  return(
    <div className="App">
        <Header>
            <ContadorDeTareas 
            totalDeTareas={totalDeTareas}
            totalTareasCompletadas={totalTareasCompletadas}
            />
            <BuscadorDeTareas 
            valorBusqueda={valorBusqueda}
            cambiarValorBusqueda={cambiarValorBusqueda}
            />
        </Header>
        <ListaDeTareasContainer>
            <ListaDeTareas>
                {error && <p>Hubo un error...</p>}
                {loading && <p>Estamos cargando...</p>}
                {(!loading && !tareasBuscadas.length) && <p>¡Crea tu primer tarea!</p>}

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
            <BotonParaCrearNuevaTarea 
              setOpenModal={setOpenModal}
            />
        </ListaDeTareasContainer>
        { openModal && (            
            <Modal>
                <FormularioAgregarTarea
                  setOpenModal={setOpenModal}
                  agregarTarea={agregarTarea}
                />
            </Modal>
        )}
    </div>
  );
}

export default App;
