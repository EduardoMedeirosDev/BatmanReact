import React from 'react'
import './styles.css'

function Button({name, active, onClick}){

    return (
        <><div className='containerButton'>
            <button onClick={() => onClick(2)} className={active ? 'button' : 'disabledButton'}>{name}</button>
            <span>Seus dados estão salvo conosco</span>
            </div>
        </>
    )
}

// para usar o onClick, precisa ser aqui, pois é considerado propriedade do html, no App.js é considerado js.

export default Button