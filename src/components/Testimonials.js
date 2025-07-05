import TestimonialCards from "./TestimonialsCards";

import bruschetta from '../Images/bruchetta.svg'; /*ppl are bruschetta*/

import './Testimonials.css';

const Testimonials = () => {
    return(
        <div className="main-testimonial">
            <h2 className="testimonial-title">Testimonials</h2>
            <div className="testimonial-cards">
                <TestimonialCards image={bruschetta} name="Joe Swanson"
                description="This food bussin bruh"
                />
                <TestimonialCards image={bruschetta} name="Glenn Quagmire"
                description="This so good"
                />
                <TestimonialCards image={bruschetta} name="Peter Griffin"
                description="Good so this"
                />
                <TestimonialCards image={bruschetta} name="Cleveland Brown"
                description="my name is cleveland brown"
                />
            </div>
        </div>
    )
}

export default Testimonials;