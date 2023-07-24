import { Rating } from "@smastrom/react-rating";
import React from "react";
import '@smastrom/react-rating/style.css'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleCollege = ({ college }) => {

  const {
    _id,
    college_name,
    college_image,
    college_rating,
    admission_date,
    number_research,
  } = college;
  return (
    <div>
      <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
        <figure className="h-[200px]">
          <img src={college_image} alt="Shoes" className=""/>
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {college_name}</h2>
          <div className="flex justify-between text-lg">
            <p className="flex">
              Rating:{" "}
              <Rating
                style={{ maxWidth: 100 }}
                value={college_rating}
                readOnly
                className="ms-2"
              />{" "}
            
            </p>
            <p>Research: {number_research}</p>
          </div>
          <p>Admission Date: {admission_date}</p>
          <div className="card-actions justify-between mt-4">
            <Link to={`/details/${_id}`} className="btn px-12 text-lg text-white hover:bg-[#2D6A4F]	bg-[#40916C]">Details</Link>
            <Link to="/admission" className="btn btn-outline hover:bg-[#2D6A4F]">Admission <FaExternalLinkAlt></FaExternalLinkAlt> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollege;
