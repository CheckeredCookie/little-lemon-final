import Homepage from './Homepage.js';
import AboutMe from './AboutMe.js';
import BookingPage from './BookingPage.js';
import ConfirmedBooking from './ConfirmedBooking.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useReducer } from 'react';

import './Main.css';


const updateTimes = (state, action) => {
    console.log("state: ", state, " action: ", action);
    if (action && action.type === "update_times") {
        const selectedDate = new Date(action.payload);
        console.log("dispatch worked, payload results: ", selectedDate)

        return window.fetchAPI(selectedDate);
    }
    return state;
}

const initializeTimes = () => {
    const today = new Date();

    console.log("date of today", today);
    return window.fetchAPI(today); /*go back and do this with the proper api when you have time */

}



const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (window.submitAPI(formData)) {
            navigate("/booking-confirmed");
        }
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </>
    );
}

export default Main;

