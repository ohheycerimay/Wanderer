
import React from 'react';
import BookingCard from './BookingCard';
// import ExperiencesCard from './ExperiencesCard';

function BookingContainer({user}) {
    // console.log(bookings)
console.log(user.experiences)


    return (
        <div>
            {user.bookings.map((booking) => <BookingCard key={booking.id} booking={booking}/> )}
            {/* {user.experiences.map((experience) => <BookingsCard key={experience.id} experience={experience}/> )} */}
            
        </div>
    );
}
export default BookingContainer;


