import React from 'react';

function BookingCard({booking, experience}) {


    return (
        <div className='card-container'>
            <div className='card'>
                {/* <h3>{experience.location}</h3>
                <h7>{experience.name}</h7> */}
                <h4> Total Tickets Purchased: {booking.people_count}</h4>
                <h5> Booking Price ${booking.total_price}</h5>
                <h6>Date of Booking:{booking.datetime}</h6>
            </div>
        </div>
    );
}
export default BookingCard