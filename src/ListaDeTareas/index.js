import React from "react";
import './ListaDeTareas.css';

function ListaDeTareas(props){
    const renderFunction = props.children || props.render;

    return(
        <React.Fragment>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalDeTareas) && props.onEmpty()}

            {(!!props.totalDeTareas && !props.tareasBuscadas.length) && props.onEmptyResult()}

            <ul className="ListaDeTareas">
                {props.tareasBuscadas.map(renderFunction)}
            </ul>
        </React.Fragment>
    );
}

export { ListaDeTareas };