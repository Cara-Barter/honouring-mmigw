import './Gallery.scss';

import running from '../../assets/images/Anika-Dick-and-Leisa-Hassall.jpg';
import forest from '../../assets/images/Bella1.jpg';
import bike from '../../assets/images/Dan1.jpg';
import dark from '../../assets/images/early-morning1.jpg';
import heron from '../../assets/images/Joann-Coull-Nanaimo.jpg';
import cold from '../../assets/images/Lisa.jpg';
import sunset from '../../assets/images/Lorraine1.jpg';
import trail from '../../assets/images/Melissa-Johnson-Kelowna.jpg';
import red from '../../assets/images/no-more.jpg';
import hike from '../../assets/images/Raven1.jpg';

function Gallery() {
    return (
        <section className='gallery'>
            <ul className="gallery__list">
                <li className="gallery__item">
                    <img className='gallery__img' src={red} alt='woman in red dress holding a sign "I am a Sister. Daughter, Aunty. Pls keep me safe!!! #NoMoreStolenSisters"' />
                </li>
                <li className="gallery__item">
                    <img className='gallery__img' src={running} alt='girls running on a track' />
                </li>
                <li className="gallery__item">
                    <img className='gallery__img' src={forest} alt='family walk in the woods' />
                </li>
                <li className="gallery__item">
                    <img className='gallery__img' src={bike} alt='selfie of man biking on a dirt road with partner behind' />
                </li>
                <li className="gallery__item">
                    <img className='gallery__img' src={dark} alt='early morning track workout' />
                </li>
                <li className="gallery__item">
                    <img className='gallery__img' src={heron} alt='heron on a tree branch' />
                </li>
                <li className="gallery__item">
                    <img className='gallery__img' src={cold} alt='selfie of woman in front of ice hills' />
                </li>
                <li className="gallery__item">
                    <img className='gallery__img' src={sunset} alt='selfie of woman in front of sunset' />
                </li>
                <li className="gallery__item">
                    <img className='gallery__img' src={trail} alt='mountain trail with lots of cloudy skies' />
                </li>
                <li className="gallery__item">
                    <img className='gallery__img' src={hike} alt='man on mountain road looking to the sky' />
                </li>
            </ul>
        </section>
    )
}

export default Gallery;
