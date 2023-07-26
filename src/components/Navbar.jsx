import React from 'react'
import StrongLogo from '../assets/Stronglogo.png'
import Windows10 from '../assets/Windows 10.svg'
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
    <div>
        <div className='navbar'>
          <a href='https://strongtechbrasil.com.br/'>
          <img src={StrongLogo} alt='Strong Logo' className='strong-logo'/>
          </a>
          <div className="windows-10">
            <img src={Windows10} alt="" className="windows-logo"/>
            <p className='windows-preco'>A partir de R$ 2.641,00</p>
            <a href='https://strongtechbrasil.com.br/produto/computador-completo-all-in-one-intel-i7-8gb-ssd-512gb-215-full-hd-webcam-teclado-e-mouse-sem-fio-strong-tech/?add-to-cart=10015'>
              <button className="link-strong">Comprar</button>
            </a></div>
        </div></div>
    </>
  )
}
