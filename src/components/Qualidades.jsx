import React from 'react'
import './Qualidades.css'
import QualidadeImagem from '../assets/All-in-One Completo.webp'
import {GiProcessor} from 'react-icons/gi'
import {SiWindows} from 'react-icons/si'
import {FaLinux, FaMemory, FaUsb} from 'react-icons/fa6'
import {BsDeviceSsdFill, BsGpuCard, BsKeyboardFill} from 'react-icons/bs'
import {BiSolidWebcam, BiLock} from 'react-icons/bi'
import {AiOutlineLaptop} from 'react-icons/ai'
import {IoColorFilterOutline} from 'react-icons/io5'
import {PiFeatherDuotone} from 'react-icons/pi'
import {LiaRulerHorizontalSolid} from 'react-icons/lia'

export const Qualidades = () => {
  return (<>
<div className="qualidades-container">
    <div className="qualidades-titulo">
        <p className="qualidades-allinone">
            O melhor<br/>
            está em um<br/>
            All in One
        </p>
    </div>
    <img src={QualidadeImagem} alt="O melhor do All-in-One para você" className="qualidades-imagem" />
</div>  
<div className="qualidades-apresentacoes">
    <div className="qualidades-atributos">
      <span className="qualities">
        <GiProcessor className='icones'/>
        <p>Processamento</p>
      </span>  
      <span className="apresentacoes"> 
        <p className="qualities-paragrafo">Processador Intel® Core™ i7</p>
      </span>
    </div>
     <div className="qualidades-atributos">
      <span className="qualities">
        <SiWindows className='icones'/>
        <p>Sistema Operacional</p>
      </span>
      <span className="apresentacoes">
        <p className="qualities-paragrafo">
        Windows 10 Trial
        </p>
      </span>
    </div>
    <div className="qualidades-atributos">
      <span className="qualities">
        <FaLinux className='icones'/>
        <p>Outro Sistema Operacional</p>
      </span>
      <span className="apresentacoes">
        <p className="qualities-paragrafo">
          Linux (não incluso)
        </p>
      </span>
      </div>
      <div className="qualidades-atributos">
        <span className="qualities">
          <BsGpuCard className='icones'/>
          <p>Gráficos</p>
        </span>
        <span className="apresentacoes">
          <p className='qualities-paragrafo'>Intel HD Graphics</p>
        </span>
     </div>
     <div className="qualidades-atributos">
      <span className="qualities">
        <FaMemory className='icones'/>
        <p>Memória RAM</p>
      </span>
      <span className="apresentacoes">
        <p className="qualities-paragrafo">
          8GB DDR3
        </p>
      </span>
     </div>
     <div className="qualidades-atributos">
      <span className="qualities">
        <BsDeviceSsdFill className='icones'/>
        <p>Armazenamento</p>
      </span>
      <span className="apresentacoes">
        <p className="qualities-paragrafo">
          SSD de 512GB
        </p>
      </span>
     </div>
     <div className="qualidades-atributos">
      <span className="qualities">
        <BiSolidWebcam className='icones'/>
        <p>Webcam</p>
      </span>
      <span className="apresentacoes">
        <p className="qualities-paragrafo">
        Webcam frontal integrada de 720p, com webcam cover
        </p>
      </span>
     </div>
     <div className="qualidades-atributos">
      <span className="qualities">
        <BiLock className='icones'/>
        <p>Segurança</p>
      </span>
      <span className="apresentacoes">
        <p className="qualities-paragrafo">
          Windows Defender
        </p>
      </span>
     </div>
     <div className="qualidades-atributos">
      <span className="qualities">
        <FaUsb className='icones'/>
        <p>Portas e Conexões</p>
      </span>
      <span className="apresentacoes">
        <p className="qualities-paragrafo2">
        Porta HDMI, 4 Portas USB 3.0, 2 Portas USB 2.0, 1 combo (microfone/áudio), 1 Porta de rede Ethernet (RJ45), 1 Entrada DC (energia) – Conexão Wi-Fi e Bluetooth.
        </p>
      </span>
     </div>
     <div className="qualidades-atributos">
      <span className="qualities">
        <AiOutlineLaptop className='icones'/>
        <p>Tela</p>
      </span>
      <span className="apresentacoes1">
      <p className='qualities-paragrafo'>
        21,5″ Full HD com tecnologia LED
      </p>
      </span>
      <span className="apresentacoes2">
        <p className='qualities-paragrafo'>
          Full HD IPS 
        </p>
      </span>
     </div>
     <div className="qualidades-atributos">
      <span className="qualities">
        <BsKeyboardFill className='icones' />
        <p>Teclado</p>
      </span>
      <span className="apresentacoes1">
        <p className="qualities-paragrafo">
        Tecnologia Comfort Key e sem fio
        </p>
      </span>
      <span className="apresentacoes2">
        <p className="qualities-paragrafo">
          Bluetooth
        </p>
      </span>
     </div>
     <div className="qualidades-atributos">
      <span className="qualities">
        <IoColorFilterOutline className='icones'/>
        <p>Cores</p>
      </span>
      <span className="apresentacoes">
        <p className="qualities-paragrafo">
        Branco Perolado / Prata Titânio
        </p>
      </span>
     </div>
     <div className="qualidades-atributos">
      <span className="qualities">
        <PiFeatherDuotone className='icones' />
        <p>Peso</p>
      </span>
      <span className="apresentacoes1">
        <p className="qualities-paragrafo">
          3,5kg
        </p>
      </span>
      <span className="apresentacoes2">
        <p className="qualities-paragrafo">
          Leve e Compacto
        </p>
      </span>
     </div>
     <div className="qualidades-atributos">
      <span className="qualities">
        <LiaRulerHorizontalSolid className='icones'/>
        <p>Dimensões</p>
      </span>
      <span className="apresentacoes1">
        <p className="qualities-paragrafo">
        36,5cm x 16cm x 50cm
        </p>
      </span>
      <span className="apresentacoes2">
        <p className="qualities-paragrafo">
          Altura x Largura X Profundidade
        </p>
      </span>
     </div>
</div>
<div className="qualidades-compra">
      <a href='https://strongtechbrasil.com.br/produto/computador-completo-all-in-one-intel-i7-8gb-ssd-512gb-215-full-hd-webcam-teclado-e-mouse-sem-fio-strong-tech/?add-to-cart=10015' 
      className='qualidades-compra-link'>
        <button className='qualidades-botao'>
         Comprar o All in One Core i7
        </button></a>
     </div>
  </>
)
}
