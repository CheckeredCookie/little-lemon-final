import Card from './Cards.js'

import salad from '../Images/greek salad.jpg'
import bruschetta from '../Images/bruchetta.svg'
import dessert from '../Images/lemon dessert.jpg'

import './Specials.css';

const Specials = () => {
    return(
        <>
            <div className="main-top">
                <h1 className="top-title">This weeks specials!</h1>
                <button className="top-title">Online Menu</button>
            </div>
            <div className="main-cards">
                <Card image={salad} title="Greek salad" 
                description="The famous greek salad of crispy lettuce, 
                peppers, olives and our Chicago style feta cheese, 
                garnished with crunchy garlic and rosemary croutons."/>
                <Card image={bruschetta} title="Bruschetta"
                description="Our Bruschetta is made from grilled bread 
                that has been smeared with garlic and  seasoned with salt 
                and olive oil."/>
                <Card image={dessert} title="Lemon Desssert"
                description="This comes straight from grandma's recipe 
                book, every last ingredient has been sourced and is as 
                authentic as can be imagined." />
            </div>
        </>
    );
}

export default Specials;