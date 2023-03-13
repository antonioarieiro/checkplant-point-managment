import React from 'react';
import { Btn } from '../../interfaces';
import  './style.scss'

const Button: React.FC<Btn> = ({text, type, children, click}) => {
    return (
        <>
        <button className={type === 'add' ? 'add-btn' : 'remove-btn'} onClick={(event) => {click(event)}}>
            {text}
            <span className="btn-text">{children}</span>
        </button>
        </>
    )
}

export default Button