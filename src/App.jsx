import './App.css'
import { Apresentacao } from './components/Apresentacao'
import { FirstBanner } from './components/FirstBanner'
import { Navbar } from './components/Navbar'
import Intel7 from './assets/Intel7.webp'
import { Operacional } from './components/Operacional'
import Windows10 from './components/Windows10'
import { AllInOne } from './components/AllInOne'
import { Visual } from './components/Visual'
import { Experience } from './components/Experience'
import { TecladoMouse } from './components/TecladoMouse'
import { Entradas } from './components/Entradas'
import { Elegance } from './components/Elegance'
import { Completo } from './components/Completo'
import { Qualidades } from './components/Qualidades'
import { Defender } from './components/Defender'
import { Vendas } from './components/Vendas'
import { Garantia } from './components/Garantia'
import { Patrocinio } from './components/Patrocinio'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <FirstBanner />
        <Apresentacao />
        <img src={Intel7} alt='All-in-One Intel 7' className='intel-imagem'/>
        <Operacional />
        <Windows10 />
        <AllInOne />
        <Visual />
        <Experience />
        <TecladoMouse />
        <Entradas />
        <Elegance />
        <Completo />      
        <Qualidades />
        <Defender />
        <Vendas />
        <Garantia />
        <Patrocinio />
        <Footer />
      </div>
    </>
  )
}

export default App