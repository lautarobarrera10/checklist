import React from "react";
import './Header.css';

function Header({children, loading}){
    return(
        <header>
            {
                React.Children.toArray(children)
                    .map(child => React.cloneElement(child, {loading}))}
        </header>
    )
}

export { Header }