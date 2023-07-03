import './Contacts.css'

import translations from './translations'
import linkedin from './../../svg/in.svg'
import inst from './../../svg/inst.svg'
import be from './../../svg/be.svg'
import ball from './../../svg/ball.svg'

export default function Contacts({lang}) {
    const text = translations[lang];
    return (
        <div id='contacts' className='contacts-container'>
            <h2 className='contacts-h'>{text['contacts']}</h2>
            <p className='contacts-p'>{text['contact-text-p1']}</p>
            <p className='contacts-p contacts-end_section'>{text['contact-text-p2']}</p>
            <a target="_blank" className='contacts-button' href="https://github.com/egor951769794">{text['contact-btn']}</a>
            <ul className='contacts-links_list'>
                <li><a className="nograb" href="https://linkedin.com"><img className="in link nograb" style={{ height: 48, width: 48 }} src={linkedin}></img></a></li>
                <li><a className="nograb" href="https://instagram.com"><img className="inst link nograb" src={inst}></img></a></li>
                <li><a className="nograb" href="https://behance.net"><img className="be link nograb" src={be}></img></a></li>
                <li><a className="nograb" href="https://dribbble.com"><img className="ball link nograb" src={ball}></img></a></li>
            </ul>
            <p className='contacts-p contacts-thin'>{text['contact-like-p1']}</p>
            <p className='contacts-p contacts-thin'>{text['contact-like-p2']}</p>
        </div>
    )
}