import React from 'react'
import './Vendas.css'
import AllVendas from '../assets/All-in-One Completo.webp'
import { AiOutlineEye } from 'react-icons/ai'


export const Vendas = () => {
  return (
    <>
    <div className="vendas">
        <div className="vendas-visual">
            <img src={AllVendas} alt="Vendas All-in-One" className="vendas-allinone" />
        </div>
        <div className="vendas-conteudo">
            <h2 className="vendas-titulo">
            Computador Completo All-in-One Intel i7 8GB SSD 512GB 21,5″ Full HD Webcam Teclado e Mouse Sem Fio Strong Tech
            </h2>
                <span className="vendas-visualizacoes">
                    <AiOutlineEye size={22} className='vendas-icones'/>
                    <p>0 pessoas estão vendo este produto agora!</p>
                </span>         
            <h3 className="vendas-cincoporcento">5% de Desconto</h3>
            <p className="vendas-pix">
              À vista no PIX
              <br/>
              R$ 2.641,01
            </p>
            <p className="vendas-preco">
            em até <b>6x de R$ 463,34</b>
            <br/>
            sem juros
            <br/>
            <b className='preco'>R$ 2.780,01</b>
            </p>
            <a href="https://strongtechbrasil.com.br/produto/computador-completo-all-in-one-intel-i7-8gb-ssd-512gb-215-full-hd-webcam-teclado-e-mouse-sem-fio-strong-tech/?add-to-cart=10015" className="vendas-link">
              <button className="vendas-botao">
                Comprar
              </button>
            </a>
          </div>
    </div>
          </>
  )
}
