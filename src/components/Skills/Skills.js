import './Skills.css'

import ps from './../../svg/ps.svg'
import ai from './../../svg/ai.svg'
import ae from './../../svg/ae.svg'
import fig from './../../svg/fig.svg'

import StarsContainer from '../StarsContainer/StarsContainer'

import translations from './translations';

export default function({lang}) {
    const text = translations[lang];
    return (
        <div id='skills' className='skills-container'>
            <h2 className='skills-h skills-end_section'>{text['skills']}</h2>
            <p className='skills-p skills-end_section'>{text['techs']}</p>
            <ul className='progs-flex'>
                <li>
                    <img className="tech ps tech-end_section" src={ps} alt="Photoshop"></img>
                    <p className='tech-name tech-end_section'>Adobe Photoshop</p>
                    <StarsContainer starsCount={4}></StarsContainer>
                </li>
                <li>
                    <img className="tech ai tech-end_section" src={ai} alt="Illustrator"></img>
                    <p className='tech-name tech-end_section'>Adobe Illustrator</p>
                    <StarsContainer starsCount={3}></StarsContainer>
                </li>
                <li>
                    <img className="tech ae tech-end_section" src={ae} alt="After Effects"></img>
                    <p className='tech-name tech-end_section'>Adobe After Effects</p>
                    <StarsContainer starsCount={4}></StarsContainer>
                </li>
                <li>
                    <img className="tech fig tech-end_section" src={fig} alt="Figma"></img>
                    <p className='tech-name tech-end_section figma-quickfix'>Figma</p>
                    <StarsContainer starsCount={4}></StarsContainer>
                </li>
            </ul>
        </div>
    )
}