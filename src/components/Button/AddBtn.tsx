import React from 'react';
import { Btn } from '../../interfaces';
import  './style.scss'

const Button: React.FC<Btn> = ({text, type, children, click, addMarker}) => {
    return (
        <>
       <div className={addMarker ? 'active' : ''}>
         <button className={type === 'add' ? 'add-btn' : 'remove-btn'} onClick={(event) => {click(event)}}>
            {addMarker ? 'Selecione um local no mapa' : text}
            <span className="btn-text">{children}</span>
        </button>
       </div>
        </>
    )
}

export default Button