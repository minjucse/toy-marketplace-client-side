import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer pt-10 mt-12 bg-base-200 text-base-content w-[80%] mx-auto">
      <div>
        <div >
          <Link to="/" className='flex items-center'>
            <img src={logo} alt="" />
            <h3 className='ml-2'>
              Arts
              <span>Toy</span>
            </h3>
          </Link>
        </div>
        <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  )
}

export default Footer