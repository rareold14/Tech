import React from 'react'
import './Footer.css'
import {GrFacebook} from 'react-icons/gr'
import {GrTwitter} from 'react-icons/gr'
import {GrYoutube} from 'react-icons/gr'
import Pagamentos from '../assets/Bandeiras.webp'
import Encrypt from '../assets/Cripto.png'


export const Footer = () => {
  return (
    <div className="footer-strong">
        <div className="footer-institucional">
            <ul className='footer-link-titulo'>Institucional
                <li className="footer-link-lista">
                    <a href="https://strongtechbrasil.com.br/sobre-nos/" className="footer-link">Sobre Nós</a>
                </li>
                <li className="footer-link-lista">
                    <a href="https://strongtechbrasil.com.br/contatos/" className="footer-link">Contatos</a>
                </li>
                <li className="footer-link-lista">
                    <a href="https://strongtechbrasil.com.br/trabalhe-conosco/" className="footer-link">Seja um Parceiro</a>
                </li>
                <li className="footer-link-lista">
                    <a href="https://strongtechbrasil.com.br/termos-e-condicoes-de-uso/" className="footer-link">Termos e Condições de Uso</a>
                </li>
                <li className="footer-link-lista">
                    <a href="https://strongtechbrasil.com.br/politica-de-cookies/" className="footer-link">Política de Cookies</a>
                </li>
            </ul>
        </div>
        <div className="footer-politicas">
            <ul className="footer-link-titulo">Links Úteis
                <li className="footer-link-lista">
                    <a href="https://strongtechbrasil.com.br/politicas-de-privacidade" className="footer-link">Política de Privacidade</a>
                </li>
                <li className="footer-link-lista">
                    <a href="https://strongtechbrasil.com.br/politica-de-garantia/" className="footer-link">Política de Garantia</a>
                </li>
                <li className="footer-link-lista">
                    <a href="https://strongtechbrasil.com.br/politica-de-entrega/" className="footer-link">Política de Devolução</a>
                </li>
                <li className="footer-link-lista">
                    <a href="https://strongtechbrasil.com.br/politica-de-pagamento/" className="footer-link">Política de Pagamentos</a>
                </li>
                <li className="footer-link-lista">
                    <a href="https://strongtechbrasil.com.br/politica-devolucao/" className="footer-link">Política de Devolução</a>
                </li>
            </ul>
        </div>
        <div className="footer-sociais">
            <p className="footer-sociais-titulo">
                Mídias Sociais
            </p>
            <span className="footer-sociais-icones-lista">
            <GrFacebook className='footer-sociais-icones'/>
            <GrTwitter className='footer-sociais-icones'/>
            <GrYoutube className='footer-sociais-icones'/>
            </span>
        </div>
        <div className="footer-atendimento">
            <h4 className="footer-atendimento-titulo">
                Central de Atendimento
            </h4>
            <p className="footer-atendimento-links">
            Vendas: 11 3135-1855    
            </p>
            <p className="footer-atendimento-links">
            Horário de Funcionamento: 
            <br/>
            Segunda a Sexta das 9h às 18h
            </p>
        </div>
        <div className="footer-pagamentos-seguranca">
            <div className="footer-pagamentos">
                <p className="footer-pagamentos-titulo">
                    Formas de Pagamento
                </p>
                <img src={Pagamentos} alt="Bandeiras aceitas por nossa empresa" className="footer-pagamentos-imagem" />
            </div>
            <div className="footer-seguranca">
                <p className="footer-seguranca-titulo">
                    Selos de Segurança
                </p>
                <img src={Encrypt} alt="Selo de segurana" className="footer-seguranca-imagem" />
            </div>
        </div>
    </div>
  )
}
