import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
const Gallery = () => {

    const images = [
        "https://img.freepik.com/premium-photo/portrait-graduates-holding-diploma-smiling_115086-933.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
        "https://img.freepik.com/free-photo/graduation-concept-with-students-holding-blank-certificate-template_23-2148201847.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
        "https://img.freepik.com/free-photo/group-colleagues-with-diploma_23-2148522297.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
        "https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201866.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
        "https://img.freepik.com/free-photo/low-angle-graduated-students_23-2148522181.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
        "https://img.freepik.com/free-photo/three-happy-graduates-smiling-holding-diplomas_176420-14286.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
        "https://img.freepik.com/free-photo/three-architects-planning-something_23-2147702514.jpg?size=626&ext=jpg&ga=GA1.2.1498671356.1683020323&semt=ais",
        "https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201827.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
        "https://img.freepik.com/free-photo/graduate-students-wearing-cap-gown_23-2148950539.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
    ]
    return (
        <>
 
        <div className='   mt-8 mb-5'>
           <h3 className='text-3xl text-center font-semibold mb-8  '>Please visit Our College Graduates Group's Gallery</h3>
        <ResponsiveMasonry
       columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
   >
       <Masonry gutter='12px'>
           {images.map((image, i) => (
               <img
               className= '  h-48 rounded-lg'
                   key={i}
                   src={image}
                   style={{width: "100%",  display: "block", cursor: 'pointer'}}
                   alt=""
                   onClick={() =>viewImage(image,i)}
               />
           ))}
       </Masonry>
   </ResponsiveMasonry>
        </div>
    </>
    );
};

export default Gallery;