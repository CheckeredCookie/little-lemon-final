import ReserveTable from "./ReserveTable";
import ReserveTableButton from "./ReserveTableButton";

import waiter from '../Images/restaurantfood.jpg';

import './ReserveTableSection.css'

const ReserveTableSection = () => {
    return(
        <>
            <div className="main-all">
                <div className="all-left-side">
                    <ReserveTable />
                    <ReserveTableButton />
                </div>
                <img className="all-right-side" src={waiter}/>
            </div>
        </>
    );
}

export default ReserveTableSection