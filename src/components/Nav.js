import './Nav.css'

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul className="nav-list">
                <li classname="list-item">
                    <a>Home</a>
                </li>
                <li classname="list-item">
                    <a>About</a>
                </li>
                <li classname="list-item">
                    <a>Menu</a>
                </li>
                <li classname="list-item">
                    <a>Reservations</a>
                </li>
                <li classname="list-item">
                    <a>Order online</a>
                </li>
                <li classname="list-item">
                    <a>Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

