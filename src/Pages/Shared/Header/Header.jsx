import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import logo from '../../../assets/logo.png';


const Header = () => {
  const { userInfo, signOutUser } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    signOutUser()
      .then()
      .catch(error => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-base-100 w-[80%] mx-auto pt-5 pb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link className={location.pathname === '/'? 'bg-base-200': ''} to="/">Home</Link>
              </li>
              <li >
                <Link className={location.pathname === '/product-list'? 'bg-base-200': ''} to="/product-list">All Toys</Link>
              </li>
              {
                userInfo && <div>
                  <li >
                    <Link className={location.pathname === '/my-product'? 'bg-base-200': ''} to="/my-product">My Toys</Link>
                  </li>
                  <li >
                    <Link className={location.pathname === '/product-add'? 'bg-base-200': ''} to="/product-add">Add A Toy</Link>
                  </li>
                </div>
              }
              <li>
                <Link className={location.pathname === '/blog'? 'bg-base-200': ''} to="/blog">Blogs</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className='flex items-center'>
            <img src={logo} alt="" />
            <h3 className='ml-2'>
              Arts
              <span>Toy</span>
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className={location.pathname === '/'? 'bg-base-200': ''} to="/">Home</Link>
            </li>
            <li >
                <Link className={location.pathname === '/product-list'? 'bg-base-200': ''} to="/product-list">All Toys</Link>
              </li>
              {
                userInfo && <div className='flex'>
                  <li >
                    <Link className={location.pathname === '/my-product'? 'bg-base-200': ''} to="/my-product">My Toys</Link>
                  </li>
                  <li >
                    <Link className={location.pathname === '/product-add'? 'bg-base-200': ''} to="/product-add">Add A Toy</Link>
                  </li>
                </div>
              }
            <li>
              <Link className={location.pathname === '/blog'? 'bg-base-200': ''} to="/blog">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {userInfo ?
            <button onClick={handleLogOut} type="button" className="btn btn-outline btn-warning">Sign Out </button>
            :
            <Link to="/sign-in" className="btn btn-outline btn-warning">Sign In</Link>
          }
          {
            userInfo && <div className='user-profile tooltip tooltip-bottom' data-tip={userInfo.displayName}>
              <img src={userInfo.photoURL} alt="" />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Header