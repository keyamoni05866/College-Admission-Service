import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import EventDetails from "./EventDetails";

const Details = () => {
  const details = useLoaderData();

  console.log(details);

  const {
    _id,
    college_name,
    college_image,
    admission_date,
    college_rating,
    admission_process,
    events,
    research_works,
    sports_categories,
  } = details;
  return (
    <div>
      <div className="max-w-7xl   bg-base-200 mx-auto">
      
          <div className="flex justify-start  pt-10  ">
        <div className=" w-1/3  mr-10 ms-10 mt-12 ">
        <img
              src={college_image}
              className="   place-items-center h-[600px] rounded-lg shadow-2xl"
            />
        </div>
     
            <div  className="  w-8/12 mr-5 mb-10">
            <h1 className="text-3xl font-semibold text-[#40916C]">College Name: {college_name}</h1>
              <div className="flex justify-between text-lg">
              <p className="py-6">
                Admission Date: {admission_date}
              </p>
              <p className="flex justify-center  items-center">
              Rating:{" "}
              <Rating
                style={{ maxWidth: 100 }}
                value={college_rating}
                readOnly
                className="ms-2"
              />{" "}
            
            </p>
              </div>
              <p className=" text-lg text-justify">
              <span className="font-semibold text-xl"> Admission process: </span> {admission_process}
              </p>
           <div>
               {
                events.map(event => <EventDetails event={event}></EventDetails>)
               }
           </div>
            <div className="w-full mt-5 flex">
                
                <div className=" w-3/5  p-5 ">
                <h2 className="text-xl text-center font-semibold">Research Works </h2>
                    {
                        research_works.map(research => <div research ={research}>
                             <p className='text-lg font-semibold' > Name: {research.title}</p>
     
     <p><span className='text-lg font-semibold'>Research Details:</span> {research.abstract} </p>
<p><span className='text-lg font-semibold'>Publication Date:</span> {research.publication_date} </p>

                        </div>)
                    }
                </div>
                <div className="  w-1/2 ms-3 p-5 ">
                <h2 className="text-xl text-center font-semibold">Sports </h2>
                    {
                        sports_categories.map(sports => <div sports ={sports}>
                             <p className='text-lg font-semibold' > Name: {sports.category_name}</p>
     
     <p><span className='text-lg font-semibold'> Details:</span> {sports.details} </p>


                        </div>)
                    }
                </div>
            </div>

            </div>
          </div>
       
      </div>
    </div>
  );
};

export default Details;
