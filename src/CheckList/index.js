import React from 'react';
import './CheckList.css';

function CheckList(props) {
    return(
        <section className='CheckList'>
            {props.children}
        </section>
    );
}

export { CheckList };