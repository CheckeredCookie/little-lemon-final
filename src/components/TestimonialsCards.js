import './TestimonialsCards.css';

const TestimonialCards = ({image, name, description}) => {
    return(
        <div className="tcard-container">
            <h3 className="tcard-title">Rating</h3>
            <div className="tcard-middle">
                <img className="tcard-image" src={image} />
                <p className="tcard-name">{name}</p>
            </div>
            <p className="tcard-desc">{description}</p>

        </div>
    );
}

export default TestimonialCards;