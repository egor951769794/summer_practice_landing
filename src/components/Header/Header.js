import './Header.css'
import AnchorLink from "react-anchor-link-smooth-scroll"

import translations from './translations';

function Header({lang}) {
    const text = translations[lang];
    return (
        <header className='header-flex'>
            <h2><AnchorLink className='react-link' href="#home">{text['home']}</AnchorLink></h2>
            <h2><AnchorLink className='react-link' href="#about">{text['about']}</AnchorLink></h2>
            <h2><AnchorLink className='react-link' href="#skills">{text['skills']}</AnchorLink></h2>
            <h2><AnchorLink className='react-link' href="#portfolio">{text['portfolio']}</AnchorLink></h2>
            <h2><AnchorLink className='react-link' href="#contacts">{text['contacts']}</AnchorLink></h2>
            {/* <a><h2>{text['about']}</h2></a>
            <a><h2>{text['skills']}</h2></a>
            <a><h2>{text['portfolio']}</h2></a>
            <a><h2>{text['contacts']}</h2></a> */}
        </header>
    )
}

export default Header;
