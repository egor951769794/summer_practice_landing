import './StarsContainer.css'

import blackStar from './../../svg/star_black.svg'
import emptyStar from './../../svg/star_empty.svg'

export default function({starsCount=0}) {
    return (
        <div className='stars-container'>
            <img className='star' src={starsCount > 0 ? blackStar : emptyStar}></img>
            <img className='star' src={starsCount > 1 ? blackStar : emptyStar}></img>
            <img className='star' src={starsCount > 2 ? blackStar : emptyStar}></img>
            <img className='star' src={starsCount > 3 ? blackStar : emptyStar}></img>
            <img className='star' src={starsCount > 4 ? blackStar : emptyStar}></img>
        </div>
    )
}