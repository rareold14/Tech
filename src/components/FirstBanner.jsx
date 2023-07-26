import React from 'react'
import './FirstBanner.css'
import AllInOne from '../assets/All-in-One.webp'

export const FirstBanner = () => {
  return (<>
    <div className="first-banner-div">
      <img src={AllInOne} alt='All-in-One' className='all-in-one1'/>
    <div className="first-banner-textos">
        <h1 className="first-banner-titulo">Novo All-in-One</h1>
        <p className="first-banner-descricao">Computador Completo
        <br/>
        All-In-One Intel i7 8GB RAM
        <br/>
        SSD 512 Gb 21,5” Full HD
        <br/>
        Webcam Teclado e Mouse Sem Fio</p>
    </div>
    </div>
  </>
  )
}
