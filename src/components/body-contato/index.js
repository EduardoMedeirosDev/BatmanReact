import React from "react";
import './styles.css'

function BodyContato(){
    
    return (
    <>
        <div className="contact-container">
            <div className="contact-form">
                <form className="contact-form-content">
                    <label id="title" className="title" name="title">Em caso de dúvidas, entre em contato com a gente!</label>

                    <input className="form-input-contact" id="form-input-contact name" type="name" name="Nome" placeholder=" Qual o seu nome?"/>

                    <input className="form-input-contact" id="form-input-contact email" type="email" name="Email" placeholder=" Digite um email válido"/>

                    <select className="select" name="Assunto">
                        <option>Assunto</option>
                        <option value="Problemas técnicos">Problemas Técnicos</option>
                        <option value="Criticas e Sugestões">Críticas e Sugestões</option>
                        <option value="Outro">Outro</option>
                    </select>

                    <textarea className="text-contact" name="mensagem" id="mensagem" rows="6" placeholder="                 Digite sua mensagem"></textarea>
        
                    <button className="contact-button">Enviar</button>
                </form>
            </div>
                <div class="contact-card-body">
                    <a href="https://www.instagram.com" target="_blank"><img className="contact-card insta" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"></img></a>
                    <a href="https://www.youtube.com" target="_blank">
                    <img className="contact-card youtube" src="https://seeklogo.com/images/Y/youtube-2017-icon-logo-D1FE045118-seeklogo.com.png"></img></a>
                </div>
        </div>
    </>
    )       
}


export default BodyContato