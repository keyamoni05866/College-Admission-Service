import React, { useEffect, useState } from 'react';
import SingleCollege from './SingleCollege';

const Colleges = () => {
const [colleges, setColleges] = useState([]);

useEffect(() =>{
         fetch('https://college-service-server-rho.vercel.app/colleges')
         .then(res => res.json())
         .then(data => setColleges(data))
},[])

    return (
        <div className=''>
                 <h2 className=' text-3xl text-center mt-5 font-semibold text-[#40916C]  '>All Colleges</h2>
            <div className='max-w-7xl lg:mx-auto   lg:grid lg:grid-cols-3 grid grid-cols-1 gap-9 my-10'>
                {
                    colleges.map(college => <SingleCollege
                     key={college._id}
                     college= {college}
                    ></SingleCollege>)
                }
            </div>
        </div>
    );
};

export default Colleges;