import React from "react";
import './styles.css'
import Video from '../../assets/trailer.mp4'
import Cards from '../cards'


function Body() {
    return (
    <>
        <div id='banner'></div>
        <div id='trailer-container'>
            <div className='content'>
                <video controls className='trailer'>
                    <source src={Video}/>
                    Seu navegador não possui suporte para vídeos.
                </video>
                <div id='sinopse'>
                    <p className='description'>
                        Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas 
                        mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário 
                        se estabelece como a personificação da vingança para a população.
                    </p>
                    <button className='home-button'>Comprar Ingresso</button>
                </div>
            </div> 
        </div>
    </>
    )
}

export default Body;

