import React, { useState } from 'react';

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState('17:00');
    const [numGuests, setNumGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const handleResDateChange = (e) => {
        setResDate(e.target.value);
        dispatch({type: 'update_times', payload: e.target.value})
    };

    const handleTimeChange = (e) => {
        setResTime(e.target.value);
    };

    const handleNumGuestsChange = (e) => {
        setNumGuests(e.target.value);
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date: resDate,
            time: resTime,
            guests: numGuests,
            occasion: occasion
        };
        submitForm(formData);
        console.log("Form: ", formData);
        setResDate('');
        setResTime('');
        setNumGuests(1);
        setOccasion('Birthday');
    }

    return(
    <>
        <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input value={resDate} onChange={handleResDateChange} type="date" id="res-date" />
            <label htmlFor="res-time">Choose time</label>
            <select value={resTime} onChange={handleTimeChange} id="res-time">
                {availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input value={numGuests} onChange={handleNumGuestsChange} type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select value={occasion} onChange={handleOccasionChange} id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    </>
    )
}

export default BookingForm;