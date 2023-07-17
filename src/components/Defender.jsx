import React from 'react'
import './Defender.css'
import Defensor from '../assets/WindowsDefender.png'

export const Defender = () => {
  return (
    <>
    <div className="windows-defender">
      <div className="defender-conteudo">
        <span className="defender">
          <p className="defender-texto">
          Seu novo All-in-One já vem com o Windows instalado.
          <br/>
          Experimente ao máximo uma vida digital segura.
          </p>
        </span> 
      <div className="defender-visual">
        <img src={Defensor} alt="Sistema anti-vírus nativo do Windows" className="defender-imagem" />
      </div>
    </div>
    </div>
  </>
  )
}
