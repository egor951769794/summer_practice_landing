import './Portfolio.css'

import PortfolioCase from '../PortfolioCase/PortfolioCase';
import fashionStore from '../../img/port_onlineshop.png'
import braun from '../../img/port_braun.png'
import reebok from '../../img/port_reebok.png'

import translations from './translations'

export default function Portfolio({lang}) {
    const text = translations[lang];
    return(
        <div className='portfolio-container'>
            <h2 className='portfolio-h portfolio-end_section'>{text['portfolio']}</h2>
            <PortfolioCase lang={lang} src={fashionStore} en="Online fashion store - Homepage" ru="Интернет-магазин модной одежды – Главная страница"></PortfolioCase>
            <PortfolioCase lang={lang} src={reebok} en="Reebok Store - Concept" ru="Магазин Reebok – Концепции"></PortfolioCase>
            <PortfolioCase lang={lang} src={braun} en="Braun Landing Page - Concept" ru="Braun Landing Page – Концепции"></PortfolioCase>
        </div>
    )
}