import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-section">
                <h3 className="footer-list">Doormat Navigation</h3>
                <ul>
                    <li className="list-item">Home</li>
                    <li className="list-item">About</li>
                    <li className="list-item">Menu</li>
                    <li className="list-item">Reservations</li>
                    <li className="list-item">Order online</li>
                    <li className="list-item">Login</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3 className="footer-list">Contact</h3>
                <ul>
                    <li className="list-item">Address</li>
                    <li className="list-item">Phone number</li>
                    <li className="list-item">Email</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3 className="footer-list">Social Media Links</h3>
                <ul>
                    <li className="list-item">Address</li>
                    <li className="list-item">Phone number</li>
                    <li className="list-item">Email</li>
                </ul>
                </div>
        </footer>
    );
}

export default Footer;

