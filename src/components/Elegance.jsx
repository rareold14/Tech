import React from 'react'
import './Elegance.css'
import { LuRadioTower } from 'react-icons/lu'
import { TfiMusicAlt } from 'react-icons/tfi'
import { HiOutlineLightBulb } from 'react-icons/hi'

export const Elegance = () => {
  return (
    <><div className="elegance">
        <div className="elegance-atributos">
          <h2 className="elegance-atributos-titulo">
            A produtividade e a elegância juntas,
            <br/>
            no seu All-in-One Strong Tech®!
        </h2></div>
    <div className="elegance-atributos-container">
      <div className="elegance-atributos-produtividade">
        <div className="elegance-icon">
          <LuRadioTower/></div>
        <div className="elegance-elementos-conteudo">
            <h3 className="elegance-elementos-titulo">
              <span>Produtividade</span></h3>
              <p className="elegance-elementos-texto">
                Faça da sua casa e trabalho mais fáceis com o All-in-One!
              </p>
          </div>
          </div>
          <div className="elegance-atributos-entretenimento">
            <div className="elegance-icon">
              <TfiMusicAlt/>
            </div>
            <div className="elegance-elementos-conteudo">
              <h3 className="elegance-elementos-titulo">
              <span>Entretenimento</span>
              </h3>
            <p className="elegance-elementos-texto">
              Desde músicas e audiobooks até suas séries favoritas! Deixe o All-in-One te entreter!
            </p></div>
          </div>
          <div className="elegance-atributos-inteligencia">
            <div className="elegance-icon">
            <HiOutlineLightBulb/>
            </div>
            <div className="elegance-elementos-conteudo">
              <h3 className="elegance-elementos-titulo">
              <span>Mais inteligência</span>
              </h3>
              <p className="elegance-elementos-texto">
              Conte e execute suas tarefas de forma mais inteligente com o All-in-One!
              </p>
            </div>
          </div>
          </div>
    </div></>
  )
}
