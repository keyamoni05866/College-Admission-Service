import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Admission = () => {
    const {user} = useContext(AuthContext);
   
const handleSubmit = event=>{
    event.preventDefault();
    const form = event.target;
    const CandidateName = user?.displayName;
    const candidateEmail = user?.email;
    const CollegeName = form.collegeName.value;
    const UserPhoto = form.photo.value;
    const subject = form.subject.value;
    const phoneNumber = form.phone.value;
    const address = form.address.value;
    const birth = form.birth.value;

   

    const admissionInfo ={
        candidateEmail,
         CandidateName, 
         CollegeName, 
         UserPhoto, 
         subject,
          phoneNumber, 
          address, 
          birth
    }
    
    
    fetch('http://localhost:5000/admission', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(admissionInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    
      // form.reset()
    })
    
}


    return (
        <div className=" max-w-5xl mx-auto   rounded-lg pt-3 pb-7">
      <h2 className="text-2xl text-center mb-5   font-semibold ">
      Please Give Us Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className="shadow-2xl bg-base-100  max-w-3xl   mx-auto px-9  py-4 rounded-lg"
      >
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-2 ">
       
          <div className="form-control">
            <label className="label">
              <span className="label-text">Candidate Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Candidate Email</span>
            </label>
            <input
              type="text"
              placeholder=" email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">College Name</span>
            </label>
            <input
              type="text"
              placeholder=" College Name"
              name="collegeName"
         
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              placeholder="phone"
              name="phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <select className="select select-bordered" name="subject">
              <option disabled selected>
                Select Subject
              </option>
              <option>Arts</option>
              <option>Commerce</option>
              <option>Science</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="address"
              name="address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date Of Birth</span>
            </label>
            <input
              type="date"
              placeholder="date of birth"
              name="birth"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Your Photo"
              name="photo"
              className="input input-bordered"
            />
          </div>
        </div>
      
        <div className="form-control mt-6">
          <input
            type="submit"
            className="btn btn-block text-white hover:bg-[#2D6A4F]	bg-[#40916C]"
            value="Submit"
          />
        </div>
      </form>
    </div>
    );
};

export default Admission;