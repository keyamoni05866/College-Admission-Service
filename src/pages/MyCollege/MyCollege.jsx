import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import AdmissionDetail from './AdmissionDetail';

const MyCollege = () => {
    const {user} = useContext(AuthContext);

    const [myColleges, setColleges] = useState([]);
    

    useEffect(() =>{
        fetch(`http://localhost:5000/myCollege?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])
    return (
        <div className='mb-9 mt-9  h-[500px] max-w-7xl mx-auto'>
        <div className=' rounded-lg'>
          <h2 className='text-2xl  mb-3 text-center text-[#40916C] font-semibold'>Admission  Information</h2>
   

<div className="overflow-x-auto w-full ms-11">
<table className=" table w-full ">


  <tbody className=''>

{
  myColleges.map(MyCollege => <AdmissionDetail
    key={MyCollege._id}
    MyCollege={MyCollege}
    
  ></AdmissionDetail>)
}



  </tbody>

  
</table>
</div>
      </div>
    </div>
    );
};

export default MyCollege;