import './Desc.css'

import translations from './translations';
import photo from './../../img/main_ph.png'

export default function Desc({lang}) {
    const text = translations[lang];
    return (
        <div>
            <div className='top-flex'>
                <div>
                    <div className='author-name'>{text['denis-p1']}</div>
                    <div className='author-name'>{text['denis-p2']}</div>
                </div>
                <div>
                    <div className='author-desc'>{text['desc-p1']}</div>
                    <div className='author-desc'>{text['desc-p2']}</div>
                </div>
                <div className='lang-switch'><span className='lang-switch-ru'></span><span className='lang-switch-line'></span><span className='lang-switch-en'></span></div>
            </div>
            <div className='bottom'>
                <img src={photo} alt="Photo" className='bottom-photo'></img>
            </div>
        </div>
    )
}
