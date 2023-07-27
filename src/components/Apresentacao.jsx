import React from 'react'
import './Apresentacao.css'

export const Apresentacao = () => {
  return (<>
  <div className="strong-containers">
        <div className="versatilidade">
            <h2 className="versatilidade-titulo">Tudo em um só lugar</h2>
            <br/>
            <p className="versatilidade-texto">Desempenho potente. Design compacto. Tela de alta definição. Conectividade versátil.</p>
            <br/>
            <h2 className="versatilidade-complemento">All in One Strong Tech</h2>
    </div>
        <div className="webcam">
            <h1 className="webcam-integrada">Webcam Integrada</h1>
            <br/>
            <h3 className="webcam-integrada-subtitulo">Qualidade de Imagem</h3>
            <br/>
            <p className="webcam-integrada-texto">Webcam integrada ao All in One Strong Tech: Praticidade em videoconferências, captura de fotos e comunicação visual. Qualidade de imagem nítida e conveniência em um único dispositivo. Com a webcam cover para uma maior privacidade para usar o seu computador.
            </p>
        </div>
    
  </div>
  </>

  )
}
