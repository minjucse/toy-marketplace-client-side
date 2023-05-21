import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const SignUp = () => {
  useTitle('Sign Up');
  const { createUser, updateUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        
        updateUser(name, photo).then(
          navigate(from, { replace: true })
        ).catch(error => {
          console.log(error);
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleAccepted = event => {
    setAccepted(event.target.checked)
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src="" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input type="text" name='photo' placeholder="Image URL" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
              </div>
              <div className="form-control flex">
                <label className="label">
                  <span className="label-text">{<>Accept <Link to="/terms">Terms and Conditions</Link> </>}</span>
                </label>
                <input type="checkbox" name="accept" className="checkbox checkbox-primary"  onClick={handleAccepted}/>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" disabled={!accepted}/>
              </div>
            </form>
            <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/sign-in">Sign In</Link> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp