import './PortfolioCase.css'

export default function PortfolioCase({src, en, ru, lang}) {
    return (
        <div className='case-section'>
            <img className="portfolio-case" src={src}></img>
            <div className='portfolio-desc'>{lang === 'en' ? en : ru}</div>
        </div>
    )
}
