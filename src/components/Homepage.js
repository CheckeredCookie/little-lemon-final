import ReserveTableSection from './ReserveTableSection.js';
import Specials from './Specials.js';
import Testimonials from './Testimonials.js';
import About from './About.js';

import './Main.css';




const Main = () => {
    return (
        <>
            <ReserveTableSection/>
            <br />
            <Specials />
            <Testimonials />
            <About />
        </>
    );
}

export default Main;

