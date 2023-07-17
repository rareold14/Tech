import React from 'react'
import './Experience.css'
import Experiencia from '../assets/All-in-One-Lateral.webp'

export const Experience = () => {
  return (
    <div className="experiencia">
        <h1 className="experiencia-titulo">Uma experiência inesquecível</h1>
        <p className="experiencia-texto">O All-in-One Strong Tech® foi desenvolvido focado em desempenho e estilo. Pensando nesses pontos, o All-in-One conta com a exclusiva TECNOLOGIA ERGO LIFT, um sistema projetado para inclinar e ajustar para você ter um maior conforto, reduzindo o estresse.</p>
        <img src={Experiencia} alt="All-in-One lateral" className="experiencia-all-in-one" />
    </div>
  )
}
