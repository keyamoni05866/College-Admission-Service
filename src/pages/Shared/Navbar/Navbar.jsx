import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
const{logOut, user} = useContext(AuthContext);

const handleLogOut = () =>{
  logOut()
  .then(()=>{})
  .catch(error =>console.error(error))
}

  return (
    <div className="navbar bg-[#f3f8f3] lg:px-40">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/college">Colleges</Link>
            </li>
            <li>
              <Link to="/admission">Admission</Link>
            </li>
            <li>
              <Link to="/myCollege">My College</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">CollegeHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/college">Colleges</Link>
          </li>
          <li>
            <Link to="/admission">Admission</Link>
          </li>
          <li>
            <Link to="/myCollege">My College</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      {
          user && (
           <img src={user?.photoURL} data-toggle = "tooltip" title={user?.displayName} alt="" className="w-16 h-14 mr-4 rounded-full"/>
          )
        }
        {
          user ? (
            <button onClick={handleLogOut} className="btn text-white hover:bg-[#2D6A4F]	bg-[#40916C]">LogOut</button>
          ):
          (
            <Link to="/login" className="btn text-white hover:bg-[#2D6A4F]	bg-[#40916C]">Login</Link>
          )
        }
   
      </div>
    </div>
  );
};

export default Navbar;
