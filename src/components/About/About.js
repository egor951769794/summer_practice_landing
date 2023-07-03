import './About.css'

import translations from './translations';

export default function About({lang}) {
    const text = translations[lang];
    return (
        <div className='about-container'>
            <h2 className='about-h about-end_section'>{text['about']}</h2>
            <p className='about-p'>{text['about-p1']}</p>
            <p className='about-p about-end_section'>{text['about-p2']}</p>
            <p className='about-p about-end_section about-tight'>{text['about-p3']}</p>
            <p className='about-p about-tight'>{text['about-p4']}</p>
        </div>
    )
}