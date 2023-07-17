import React from 'react'
import './Windows10.css'
import WallpaperWindows from '../assets/WallpaperWindows.png'
import Windows10Logo from '../assets/WindowsLogo.png'

const Windows10 = () => {
  return (
    <div className="wallpaper-windows">
        <img src={WallpaperWindows} alt="Wallpaper inicial do Windows" className="windows10" />
        <img src={Windows10Logo} alt="Logo do Windows 10" className="windows10-logo" />
        <h4 className="windows10-titulo">
            Windows 10
            <br />
            Você mais perto do
            <br />
            que ama
        </h4>
        <p className="windows10-paragrafo1">
        Siga suas paixões ou domine sua carga de trabalho em uma experiência totalmente nova. Descubra novas ferramentas projetadas para ajudá-lo a realizar várias tarefas, pensar, conectar e criar.
        </p>
        <h4 className="windows10-subtitulo">
            Estimule sua criatividade
        </h4>
        <p className="windows10-paragrafo2">Um espaço tranquilo, projetado para inspirar novas ideias, ajudá-lo a seguir suas paixões e ajustado especialmente para você.</p>
    </div>
  )
}

export default Windows10