import React from 'react'
import './Patrocinio.css'
import MercadoLivre from '../assets/MercadoLivreLogo.png'
import Magalu from '../assets/MagaluLogo.png'
import Americanas from '../assets/AmericanasLogo.png'
import Amazon from '../assets/AmazonLogo.png'
import Oi from '../assets/OiLogo.png'
import Kabum from '../assets/KabumLogo.png'


export const Patrocinio = () => {
  return (
    <div className="patrocinio">
        <span className="patrocinio-produto">
            <img src={MercadoLivre} alt="Mercado Livre" className="patrocinio-imagem" />
        </span>
        <span className="patrocinio-produto">
            <img src={Magalu} alt="Magalu" className="patrocinio-imagem" />
        </span>
        <span className="patrocinio-produto">
            <img src={Americanas} alt="Americanas" className="patrocinio-imagem" />
        </span>
        <span className="patrocinio-produto">
            <img src={Amazon} alt="Amazon" className="patrocinio-imagem" />
        </span>
        <span className="patrocinio-produto">
            <img src={Oi} alt="Oi" className="patrocinio-imagem" />
        </span>
        <span className="patrocinio-produto">
            <img src={Kabum} alt="Kabum" className="patrocinio-imagem" />
        </span>
    </div>
  )
}
