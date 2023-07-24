import React from 'react';

const AdmissionDetail = ({MyCollege}) => {
    console.log(MyCollege)
    const {CandidateName, CollegeName,UserPhoto,address,birth,candidateEmail,phoneNumber,subject    } = MyCollege
    return (
        <tr>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={UserPhoto}  />
              </div>
            </div>
            <div>
              <div className="font-bold"> Name: {CandidateName}</div>
              <div className="text-sm opacity-50">Email: {candidateEmail}</div>
            </div>
          </div>
        </td>
        <td>
     College Name: {CollegeName}
        
        </td>
        <td>
     Subject Name: {subject}
        
        </td>
        <td>
     address: {address}
        
        </td>
        <td>Date of Birth: {birth}</td>
        <td>Phone Number: {phoneNumber}</td>
        <th>
          <button  className="btn bg-purple-500 btn-xs">Feedback</button>
        </th>
      </tr>
    );
};

export default AdmissionDetail;