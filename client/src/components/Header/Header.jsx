import { Link } from 'react-router-dom';

import logo from '../../assets/logo/ttll-logo.png';

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <Link to='/' className='header__link'>
                    <img className='header__logo' src={logo} alt='Tsow Tun Lelum logo' />
                </Link>
                <nav className='header__nav'>
                    <ul className='header__nav-list'>
                        <li className='header__nav-item'>
                            <Link to='/' className='header__nav-link'>
                                Home
                            </Link>
                        </li>
                        <li className='header__nav-item'>
                            <Link to='/event' className='header__nav-link'>
                                60 x 60 Event
                            </Link>
                        </li>
                        <li className='header__nav-item'>
                            <Link to='/honouring' className='header__nav-link'>
                                Honouring MMIWG Loved One
                            </Link>
                        </li>
                    </ul>  
                </nav>
            </div>
        </header>
    )
}

export default Header;