import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <a><span className='text-yellow-500 font-bold text-4xl'>Summer</span><span className=' text-sky-500 font-bold text-4xl' >Cart</span></a>
      </nav>
      <nav className="grid grid-flow-col gap-4 text-lg">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Refund</a>
      </nav>
      <nav>
        <h3 className='font-semibold text-lg'>Social Links</h3>
        <div className="grid grid-flow-col gap-4">
            <a>
            <FaInstagram className='text-3xl' />
          </a>
          <a>
            <FaFacebook className='text-3xl' />
          </a>
          <a>
            <FaYoutube className='text-3xl' />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by SummerCart Pvt Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;