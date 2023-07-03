import './Header.css'

import translations from './translations';

function Header({lang}) {
    const text = translations[lang];
    return (
        <header className='header-flex'>
            <a href="google.ru"><h2>{text['home']}</h2></a>
            <a><h2>{text['about']}</h2></a>
            <a><h2>{text['skills']}</h2></a>
            <a><h2>{text['portfolio']}</h2></a>
            <a><h2>{text['contacts']}</h2></a>
        </header>
    )
}

export default Header;
