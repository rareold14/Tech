import React from 'react'
import './AllInOne.css'
import AllPrata from '../assets/All-in-One-Prata.webp'

export const AllInOne = () => {
  return (
    <>
    <div className="all-in-one">
      <div className="all-in-one-container">
       <h2 className="all-in-one-titulo">
      Beleza e
       <br/>
      Classe</h2>
      <p className="all-in-one-texto">O All in One é fabricado com um design fino e leve. Foi projetado detalhadamente para ter desempenho e elegância.</p>
      <div className="all-in-one-atributos">
        <div className='all-in-one-valores'>
          <h2>21,5"</h2>
          <div className="all-in-one-telas">
          <p>Tamanho da tela</p></div>
        </div>
        <div className="all-in-one-valores">
        <h2>16:9</h2>
        <div className="all-in-one-telas">
        <p>Resolução da tela</p></div>
        </div>
        <div className="all-in-one-valores">
        <h2>3,5kg</h2>
        <div className="all-in-one-telas">
        <p>Peso</p></div>
        </div>
        <div className="all-in-one-valores">
        <h2>Full HD</h2>
        <div className="all-in-one-telas">
        <p>Qualidade LCD IPS</p></div>
        </div>
      </div>          
      </div>
      <div className="all-in-one-imagem-container">
      <img src={AllPrata} alt="All-in-One Prata" className="all-in-one-imagem" />
      </div>
      </div>
    </>
  )
}

