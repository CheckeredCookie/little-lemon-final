import restaurant from '../Images/restaurant.jpg';

import './About.css';

const About = () => {
    return(
        <div className="about-main">
            <div className="about-text">
                <h1 className="about-title">Little Lemon</h1>
                <h2 className="about-location">Chicago</h2>
                <p className="about-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                    aute irure dolor in reprehenderit in voluptate velit
                </p>
            </div>
            <img className="about-image" src={restaurant}/>
        </div>
    )
}

export default About;