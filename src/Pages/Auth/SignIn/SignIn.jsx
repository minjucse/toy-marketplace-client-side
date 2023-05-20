import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
  const { signInUser, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true })
      })
      .catch(error => console.log(error));
  };

  const handleSignInGoogle = () => {
    signInGoogle()
      .then(result => {
        const user = result.user;
        navigate(from, { replace: true })
      }).catch(error => {
        console.log('error', error.message);

      })
  };


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src='' alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />

              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <br />

            <div className="text-center sign-area">
              <span className="">
                Or login with
              </span>
            </div>
            <div className="flex  justify-center login-social">
              <button className="btn btn-circle btn-outline" onClick={handleSignInGoogle}> <FcGoogle></FcGoogle></button>
            </div>
            <div className='my-4 text-center'>
              Don't Have an Account?
              <br></br>
              <Link to="/sign-up" className='text-blue-600/100 hover:text-orange-600 font-bold'>
                Sign up now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn