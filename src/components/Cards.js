import './Cards.css';

const Cards = ({image, title, description}) => {
    return(
        <div className="card-container">
            <img className="card-image" src={image} />

            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-desc">{description}</p>
                <a className="card-link">Order a delivery</a>
            </div>
        </div>
    );
}

export default Cards;