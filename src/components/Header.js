import logo from '../Images/logo.svg';
import Nav from './Nav.js';

import './Header.css';

const Header = () => {
    return (
        <header className="main-header">
            <img src={logo} alt="Little Lemon Logo"></img>
            <Nav/>
        </header>
    );
}

export default Header;

