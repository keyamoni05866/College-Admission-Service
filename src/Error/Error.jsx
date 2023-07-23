import React from "react";
import { Link } from "react-router-dom";
import "@lottiefiles/lottie-player";
const Error = () => {
  return (
    <div className=" max-w-5xl mx-auto flex justify-center items-center ">
      <div className=" w-[500px]">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/8373abe2-6cba-4601-9d0e-375563187671/jVXAIN95Iu.json"
        ></lottie-player>
        <h3 className="text-4xl text-center font-semibold">
          Oppsss!!!! <br /> You are in the Wrong Page!!!
        </h3>
        <div className="mt-9 lg:ms-36 ms-24">
          <Link
            to="/"
            className="py-3 rounded-lg px-10 mt-24 uppercase  text-white lg:text-xl hover:bg-[#2D6A4F]	bg-[#40916C]"
          >
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
