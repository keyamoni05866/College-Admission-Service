import React, { useEffect, useState } from 'react';
import SingleCollege from './SingleCollege';

const Colleges = () => {
const [colleges, setColleges] = useState([]);

useEffect(() =>{
         fetch('http://localhost:5000/colleges')
         .then(res => res.json())
         .then(data => setColleges(data))
},[])

    return (
        <div className=''>
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