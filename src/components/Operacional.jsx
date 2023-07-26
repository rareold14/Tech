import React from 'react'
import './Operacional.css'

export const Operacional = () => {
  return (<>
    <div className="sistema-operacional">
        <div className="sistema-windows">
            <p className="titulo-sistema">Sistema operacional</p>
            <h3 className="nome-sistema">Windows 10 Trial</h3>
        </div>
        <div className="sistema-linux">
            <p className="titulo-sistema">Outros sistemas operacionais</p>
            <h3 className="nome-sistema">Linux</h3>
        </div>
    </div>
    <div className="hardware">
    <div className="armazenamento-container">
        <h3 className="armazenamento-titulo">Armazenamento</h3>
        <div className="armazenamento-espaco">
        <p className="armazenamento-subtitulo">SSD Super Veloz de 512Gb</p>
        <h2 className='armazenamento-apresentacao'>de até 90%</h2>
        <p className='armazenamento-texto'>Mais veloz que a geração anterior</p>
        </div>
    </div>
    <div className="memoria-ram-container">
        <h3 className="memoria-ram-titulo">Memória</h3>     
        <div className="memoria-espaco">     
        <h2 className="memoria-ram-subtitulo">com 8Gb DDR3</h2>
        <p className='memoria-ram-texto'>Inicie o sistema operacional, feche e abra programas mais rápido do que nunca.</p>
        </div> 
    </div>
    </div>
  </>
    
  )
}
