import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul className="nav-list">
                <Link to="/" classname="list-item">
                    <a>Home</a>
                </Link>
                <Link to="/about-me" classname="list-item">
                    <a>About</a>
                </Link>
                <Link to="/menu" classname="list-item">
                    <a>Menu</a>
                </Link>
                <Link to="/reservations" classname="list-item">
                    <a>Reservations</a>
                </Link>
                <Link to="/order-online" classname="list-item">
                    <a>Order online</a>
                </Link>
                <Link to="/login" classname="list-item">
                    <a>Login</a>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;

