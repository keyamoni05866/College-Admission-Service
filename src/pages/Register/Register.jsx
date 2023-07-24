import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import image from '../../assets/college.avif'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Register = () => {
const {createUser,SignUpLoginWithGoogle,userProfileUpdate,signUpLoginWithGithub} = useContext(AuthContext);
const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
const handleRegister = event =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const photo = form.photo.value;
  const password = form.password.value;

  createUser(email, password)
  .then(result=>{
    const createdUser = result.user;
    console.log(createdUser)
    userProfileUpdate(createdUser,{
      displayName: name,
      photoURL: photo,
    })
    .then(()=>{})
    .catch(error => console.error(error))
    navigate(from, { replace: true });
  })
  .catch(error => console.error(error))
}





  const handleForGoogle = () =>{
    SignUpLoginWithGoogle()
    .then(result =>{
      const googleUser = result.user;
      console.log(googleUser);
  
    })
    .catch(error => console.error(error))
  }

  const handleForGithub = () =>{
    signUpLoginWithGithub()
    .then(result => {
      const getGithubUser = result.user;
      console.log(getGithubUser);
    })
    .catch(error => console.error(error))
  }
    return (
<div className='mt-10 mb-10'>
    
<div className='border  lg:w-[1000px] lg:flex mx-auto rounded-xl shadow-lg'>
    <div className='lg:w-1/2 rounded-xl shadow-lg'>
        <img src={image} alt="" className='w-full h-full '/>
    </div>

    <div className='lg:w-1/2 '>
         
      <div className=" max-w-lg mx-auto border rounded shadow-xl h-full  ">
      <h2 className="text-center  mt-6 text-3xl text-[#2D6A4F] font-semibold">
      Register!!  <br />
  
      </h2>
        <form onSubmit={handleRegister}>
          <div className="card-body">

         
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name='name'
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="photo"
                name='photo'
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name='email'
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name='password'
                className="input input-bordered"
              />
             
        <div className='flex justify-between text-sm mt-2'>
        <span className=''>New to this website? <Link to="/login" className='text-[#2D6A4F] font-semibold'>Login </Link></span>
            <span>Reset Password</span>
        </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white hover:bg-[#2D6A4F]	bg-[#40916C]">
               Register
              </button>
            </div>
            <div className="divider">OR</div>

            <div className='mx-auto '>
              <button onClick={handleForGoogle} className="btn btn-circle btn-outline mr-5 text-xl">
               <FaGoogle></FaGoogle>
               
              </button>
              <button onClick={handleForGithub} className="btn btn-circle btn-outline text-xl">
               <FaGithub></FaGithub>
               
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
</div>
</div>
        
    );
};

export default Register;