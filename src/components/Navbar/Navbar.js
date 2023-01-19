import React from 'react';
import ellipse1 from '../../asset/logo/Ellipse 1.svg';
import vector from '../../asset/logo/Vector.svg';

const Navbar = () => {
    return (
        <div className="navbar px-4  py-4 flex">
            <div className="navbar-start">

                <a className="flex ">
                    <img src={ellipse1} alt="" className='mr-4 w-[40px]  md:w-[60px] md:h-[60px]' />
                    <img src={vector} alt="" className='w-[80px] md:w-[110px]' />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 text-[18px] font-medium">
                    <li><a>Pricing</a></li>
                    <li><a>Features</a></li>
                    <li><a>Customers</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <button className='tracking-wider btn btn-primary uppercase bg-[#0370DD] rounded-[16px] border-0 px-8'>Login/Signup</button>
            </div>
            <div className='navbar-end lg:hidden'>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 font-extrabold text-[#0370DD]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ml-[-200px] border border-[#0370DD]">
                        <li><a>Pricing</a></li>
                        <li><a>Features</a></li>
                        <li><a>Customers</a></li>
                        <li><a>Contact Us</a></li>
                        <button className='tracking-wider btn btn-primary uppercase bg-[#0370DD] rounded-[16px] border-0 px-8'>Login/Signup</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;