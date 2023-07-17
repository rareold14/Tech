import React from 'react'
import './Completo.css'
import AllCompleto from '../assets/All-in-One-Novo.webp'

export const Completo = () => {
  return (
<div className="completo-allinone">
     <div className="completo-allinone-visual">
        <img src={AllCompleto} alt="All-in-One Completo Strong Tech" className="completo-allinone-imagem" />
    </div><div className="completo-allinone-lista">
     <h1 className="completo-allinone-titulo">Computador Completo All In One Intel i7 8GB SSD 512GB 21,5″ Full HD Webcam Teclado e Mouse Sem Fio Strong Tech</h1>
      <ul className="completo-allinone-listagem">
       <li className="completo-allinone-listagem-item">Desempenho de alta qualidade com processador Intel Core i7 e memória RAM de 8GB</li><br/>
       <li className="completo-allinone-listagem-item">Tela de 21,5" em Full HD para uma experiência de visualização imersiva</li><br/>
       <li className="completo-allinone-listagem-item">Webcam integrada para videoconferências e comunicação visual</li><br/>
       <li className="completo-allinone-listagem-item">Teclado e mouse sem fio para maior mobilidade e liberdade de movimento</li><br/>
       <li className="completo-allinone-listagem-item">Som estéreo de alta qualidade para uma experiência sonora envolvente</li><br/>
       <li className="completo-allinone-listagem-item">Garantia do lojista de 1 ano, incluindo 24 meses de Suporte Técnico</li><br/>
       <li className="completo-allinone-listagem-item">Conteúdo da embalagem: PC All-in-One, teclado e mouse sem fio e cabo de fonte de energia</li><br/>
    </ul><a href="https://strongtechbrasil.com.br/produto/computador-completo-all-in-one-intel-i7-8gb-ssd-512gb-215-full-hd-webcam-teclado-e-mouse-sem-fio-strong-tech/?add-to-cart=10015" className="completo-allinone-link">
    <button className="completo-compra">Comprar</button>
    </a></div></div>
  )
}