import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const MyCollege = () => {
  const { user } = useContext(AuthContext);

  const [myColleges, setColleges] = useState([]);

  useEffect(() => {
    fetch(`https://college-service-server-rho.vercel.app/myCollege?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return (
    <div className="  max-w-7xl    h-[600px] mx-auto pb-16">
   <h2 className="text-2xl text-center mb-2 mt-10 text-[#40916C]  font-semibold ">
       Selected College
      </h2>

      <div className="  pt-5">
        <div className="overflow-x-auto shadow-xl bg-base-100">
          <table className="table ">
            {/* head */}
            <thead className=" bg-[#40916C]  text-white text-md">
              <tr>
                <th>Serial</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>College Name</th>
                <th>Phone Number</th>
                <th>Subject</th>
                <th>Address</th>
                <th>Date of Birth</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {myColleges.map((myCollege, index) => (
                <tr className="text-md">
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={myCollege.UserPhoto} alt="user photo" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{myCollege.CandidateName}</div>
                      </div>
                    </div>
                  </td>
                  <td>{myCollege.candidateEmail}</td>
                  <td>{myCollege.CollegeName}</td>
                  <td>{myCollege.phoneNumber}</td>
                  <td>{myCollege.subject}</td>
                  <td>{myCollege.address}</td>
                  <td>{myCollege.birth}</td>
                 <td><button className="btn-sm rounded-lg text-white hover:bg-[#2D6A4F]	bg-[#40916C]">Review</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCollege;
