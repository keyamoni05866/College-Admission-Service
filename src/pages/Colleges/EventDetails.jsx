import React from 'react';

const EventDetails = ({event}) => {
    console.log(event)
    return (
        <div className=' text-justify text-md mt-2'>
       
        <p className='text-lg font-semibold' >Event Name: {event.event_name}</p>
     
            <p><span className='text-lg font-semibold'>Event Details:</span> {event.event_details} </p>
        </div>
    );
};

export default EventDetails;