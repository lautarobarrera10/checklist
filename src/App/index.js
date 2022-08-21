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
import { StorageChangeAlertWithStorageListener } from "../StorageChangeAlert";

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
    sincronizarTareas,
  } = useApp();
  return(
    <div className="App">
        <Header loading={loading}>
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
          <ListaDeTareas 
            error={error}
            loading={loading}
            tareasBuscadas={tareasBuscadas}
            totalDeTareas={totalDeTareas}
            onError={() => <p>Hubo un error...</p>}
            onLoading={() => <p>Estamos cargando...</p>}
            onEmpty={() => <p>¡Crea tu primer tarea!</p>}
            onEmptyResult={() => <p>No hay resultado para {valorBusqueda}</p>}
            render={tarea => (
              <Tarea
              key={tarea.text}
              text={tarea.text}
              completed={tarea.completed}
              completarTarea={() => completarTarea(tarea.text)}
              eliminarTarea={() => eliminarTarea(tarea.text)}
              />
            )}
          />
          { (!loading && !error) && (
            <BotonParaCrearNuevaTarea 
              setOpenModal={setOpenModal}
            />
          )}
        </ListaDeTareasContainer>
        { openModal && (            
            <Modal>
                <FormularioAgregarTarea
                  setOpenModal={setOpenModal}
                  agregarTarea={agregarTarea}
                />
            </Modal>
        )}
        <StorageChangeAlertWithStorageListener 
          sincronizarTareas={sincronizarTareas}
        />
    </div>
  );
}

export default App;
