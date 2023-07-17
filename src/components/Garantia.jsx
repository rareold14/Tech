import React from 'react'
import './Garantia.css'
import CaixaFrete from '../assets/CaixaFrete.svg'
import { BiBarcode } from 'react-icons/bi'
import { HiOutlineCreditCard } from 'react-icons/hi'
import { PiSealCheckBold } from 'react-icons/pi'

export const Garantia = () => {
  return (
    <div className="garantia">
        <span className="garantia-entrega">
            <img src={CaixaFrete} alt="Garantia com frete grátis." className="garantia-imagem" />
            <h3 className='garantia-texto'>
                Frete grátis
                <br/>
                Para SP, SC, MG e PR
            </h3>
        </span>
        <span className="garantia-entrega">
            <BiBarcode size={43} className='garantia-icones'/>
            <h3 className='garantia-texto'>
                Até 5% off
                <br/>
                Pagando com PIX
            </h3>
        </span>
        <span className="garantia-entrega">
            <HiOutlineCreditCard size={43} className='garantia-icones'/>
            <h3 className='garantia-texto'>
                Pagamento com
                <br/>
                cartões e PIX
            </h3>
        </span>
        <span className="garantia-entrega">
            <PiSealCheckBold size={43} className='garantia-icones'/>
            <h3 className='garantia-texto'>
                Garantia de 12 meses
                <br/>
                de fábrica
            </h3>
        </span>
    </div>
  )
}
