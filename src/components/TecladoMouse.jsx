import React from 'react'
import './TecladoMouse.css'
import TecladoMouseWireless from '../assets/Teclado e Mouse sem Fio.webp'

export const TecladoMouse = () => {
  return (<>
    <div className="teclado-mouse-conteudo">
        <h1 className="teclado-mouse-titulo">Teclado e Mouse Sem Fio</h1>
        <p className="teclado-mouse-texto">Liberte-se dos fios. Mais liberdade, mais produtividade. Experimente o conforto e a praticidade do teclado e mouse sem fio do All-in-One Strong Tech.</p>
        <img src={TecladoMouseWireless} alt="Teclado e mouse sem fio." className='teclado-mouse-wireless'/>
    </div>
    <div className="teclado-mouse-containers">
        <div className="teclado-container">
            <div className="teclado">
                <h2 className="teclado-titulo">Teclado</h2>
                <p className="teclado-texto">O teclado sem fio slim da Strong Tech combina funcionalidade e design sofisticado. Digite com conforto e estilo, sem fios atrapalhando. Experimente uma nova experiência de digitação.</p>
            </div>
        </div>
        <div className="mouse-container">
            <div className="mouse">
                <h2 className="mouse-titulo">Mouse</h2>
                <p className="mouse-texto">A precisão está em suas mãos. Com o mouse sem fio slim da Strong Tech, você tem total controle e liberdade de movimento. Seu design elegante e ergonômico garante conforto durante horas de uso. Experimente a perfeita combinação de estilo e desempenho.</p>
            </div>
        </div>
        <div className="som-container">
            <div className="som">
                <h2 className="som-titulo">Qualidade de som</h2>
                <p className="som-texto">Viva uma experiência sonora envolvente e imersiva com o som estéreo do All-in-One da Strong Tech. Desfrute de áudio cristalino e potente, que traz vida aos seus filmes, músicas e jogos favoritos. Transforme sua área de trabalho em um verdadeiro centro de entretenimento com a qualidade sonora incomparável do All-in-One Strong Tech.</p>
            </div>
        </div>
    </div>
    </>
  )
}
