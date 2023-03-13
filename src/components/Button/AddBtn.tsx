import React from 'react';
import  './style.scss'

interface Btn {
    text: string
    type: string
    children: React.ReactNode;
    click: (e: any) => void;
}

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