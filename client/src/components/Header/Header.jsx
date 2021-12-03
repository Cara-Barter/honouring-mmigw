import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

import logo from '../../assets/logo/MMIWG-logo.png';

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
                            <NavLink to='/' className='header__nav-link'>
                                Home
                            </NavLink>
                        </li>
                        <li className='header__nav-item'>
                            <NavLink to='/event' className='header__nav-link'>
                                Event Registration
                            </NavLink>
                        </li>
                        <li className='header__nav-item'>
                            <NavLink to='/honouring' className='header__nav-link'>
                                Honouring MMIWG Loved One
                            </NavLink>
                        </li>
                    </ul>  
                </nav>
            </div>
        </header>
    )
}

export default Header;