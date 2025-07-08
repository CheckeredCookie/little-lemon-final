import TestimonialCards from "./TestimonialsCards";

import man_smiling from '../Images/picture of a man.jpg';
import man_smiling2 from '../Images/picture of a man2.jpg';
import woman_smiling from '../Images/picture of a woman.jpg';
import woman_smiling2 from '../Images/picture of a woman 2.jpg'

import './Testimonials.css';

const Testimonials = () => {
    return(
        <div className="main-testimonial">
            <h2 className="testimonial-title">Testimonials</h2>
            <div className="testimonial-cards">
                <TestimonialCards image={man_smiling} name="John Doe"
                description="Loved the food and vibe!"
                />
                <TestimonialCards image={man_smiling2} name="Arnold Doe"
                description="Wonderful pasta."
                />
                <TestimonialCards image={woman_smiling} name="Jane Doe"
                description="Friendly service, enjoyed it!"
                />
                <TestimonialCards image={woman_smiling2} name="Janice Doe"
                description="Food tastes like mom's!"
                />
            </div>
        </div>
    )
}

export default Testimonials;