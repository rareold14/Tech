import React from 'react'
import './Visual.css'
import Completo from "../assets/All-in-One Completo.webp"

export const Visual = () => {
  return (
    <>
    <div className="visual-extraordinario">
        <h2 className="visual-extraordinario-titulo">Visual 
        <br />
        extraordinário</h2>
        <p className="visual-extraordinario-texto">
        Você vai se surpreender com uma tela Full HD IPS, é de brilhar os olhos. Com um amplo ângulo de visão, cores vivas, detalhes nítidos, e uma proporção de 83% tela-corpo, o All in One foi projetado para que você desfrute de uma qualidade de imagem impecável!
        </p>
        <img src={Completo} alt="All-in-One Completo" className="completo" />
    </div>
    </>
  )
}
