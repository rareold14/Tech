import React from 'react'
import './Entradas.css'
import EntradasAllInOne from '../assets/Entradas All-in-One.webp'

export const Entradas = () => {
  return (<>
  <div className="entradas">
    <div className="entradas-container">
    <h1 className="entradas-titulo">As Conexões Certas</h1>
    <p className="entradas-texto">Desconsidere a necessidade de adaptadores externos e conecte-se perfeitamente aos seus periféricos e gadgets. Com quatro portas USB 3.0, duas portas USB 2.0, uma porta HDMI, entrada para fone de ouvido, uma porta line-in para microfone e conexão LAN. Experimente a conectividade no nível ideal.
    </p>
    </div>
    <img src={EntradasAllInOne} alt="Entradas do All-in-One" className="entradas-imagem"/></div>
    <div className="entradas-entradas">
    <div className="entradas-portas">
    <h2>Wi-Fi</h2>
    <div className="entradas-conexoes">
    <p>Dual Band AC</p></div></div>
    <div className="entradas-portas">
    <h2>4.0</h2>
    <div className="entradas-conexoes">
    <p>Bluetooth</p></div></div>
    <div className="entradas-portas">
    <h2>RJ45</h2>
    <div className="entradas-conexoes">
    <p>LAN Gigabit</p></div></div>
    <div className="entradas-portas">
    <h2>USB</h2><div className="entradas-conexoes">
    <p>6x USB</p></div></div>
    <div className="entradas-portas">
    <h2>HDMI</h2><div className="entradas-conexoes">
    <p>Entrada</p></div></div>
    <div className="entradas-portas">
    <h2>VGA</h2><div className="entradas-conexoes">
    <p>Cabo</p></div></div>   
    </div>
    </>
  )
}
