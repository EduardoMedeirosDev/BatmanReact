import React from "react";
import './styles.css'

function BodyComentarios() {
    return (
        <div className="coment-container">
                <form className="coment-form-content">
                    <label className="coment-title">Comentários</label>
                    <input className="coment-input"id="name" type="name" name="Nome" placeholder=" Qual o seu nome?"/>
                    <textarea className="text" name="comentário" id="comentário" rows="6" placeholder=" Comentário"></textarea>
                    <div className="button-container">
                        <button className="button">Comentar</button> 
                        <label className="comment-checkbox-label" for="Checkbox">É spoiler?</label>
                        <input className="comment-checkbox" id="Checkbox" type="Checkbox" name="Checkbox" />
                     </div>
                </form> 
        </div> 
    )
}

export default BodyComentarios