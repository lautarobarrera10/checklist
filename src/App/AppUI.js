import React from 'react';
import { CheckCounter } from '../CheckCounter';
import { CheckSearch } from '../CheckSearch';
import { CheckList } from '../CheckList';
import { CheckItem } from '../CheckItem';
import { CreateCheckButton } from '../CreateCheckButton';

function AppUI({
    totalTareas,
    tareasCompletadas,
    searchValue,
    setSearchValue,
    searchedTareas,
    toggleCompleteTarea,
    onDelete
}) {
    return(
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

export { AppUI }