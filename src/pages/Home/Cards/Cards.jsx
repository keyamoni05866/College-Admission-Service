import React, { useEffect, useState } from 'react';
import College from './College';

const Cards = () => {
    const [colleges, setColleges] = useState([]);

useEffect(() =>{
         fetch('https://college-service-server-rho.vercel.app/3colleges')
         .then(res => res.json())
         .then(data => setColleges(data))
},[])

    return (
        <div >
            <h2 className=' lg:text-3xl text-center mt-5 font-semibold text-[#40916C] '>Popular Colleges</h2>
            <div className='max-w-7xl lg:mx-auto   lg:grid lg:grid-cols-3 grid grid-cols-1 gap-9 my-10'>
            {
                colleges.map(college => <College college={college}></College> )
            }
            </div>
          
        </div>
    );
};

export default Cards;