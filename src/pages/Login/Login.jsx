import { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const {logIn,SignUpLoginWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
const handleLogin = event =>{
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  logIn(email, password)
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser)
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

  return (
    <div className="mb-10  px-3">
    
      <div className=" max-w-lg mx-auto border rounded shadow-xl mt-12">
      <h2 className="text-center  mt-6 text-3xl text-[#2D6A4F] font-semibold">
      Login!!  <br />
  
      </h2>
        <form onSubmit={handleLogin}>
          <div className="card-body">

         
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
        <span className=''>New to this website? <Link to="/register" className='text-[#2D6A4F] font-semibold'>Register </Link></span>
            <span>Reset Password</span>
        </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white hover:bg-[#2D6A4F]	bg-[#40916C]">
                Login
              </button>
            </div>
            <div className="divider">OR</div>

            <div className='mx-auto '>
              <button onClick={handleForGoogle} className="btn btn-circle btn-outline mr-5 text-xl">
               <FaGoogle></FaGoogle>
               
              </button>
              <button className="btn btn-circle btn-outline text-xl">
               <FaGithub></FaGithub>
               
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
