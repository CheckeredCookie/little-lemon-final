import BookingForm from './BookingForm.js';

const BookingPage = ({availableTimes, dispatch, submitForm}) => {
    return(
        <>
        <h1>Book Now</h1>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </>
    )
}

export default BookingPage;