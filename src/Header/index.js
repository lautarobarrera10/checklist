import React from "react";
import './Header.css';

function Header({children}){
    return(
        <header>
            {children}
        </header>
    )
}

export { Header }