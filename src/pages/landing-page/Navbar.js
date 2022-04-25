import { useState } from 'react';
import './styles.css'
import logoIMG from '../../assets/Logo Outline.png'

function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        } else {
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href='#' className='logo'>
                <img src={logoIMG} alt='' />
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='/'>Inicio</a></li>
                <li><a href='#'>Sobre</a></li>
                <li><a href='#'>Contato</a></li>
                <li><a href='../login'>Login</a></li>
            </ul>
        </nav>

    )
}

export default Navbar;