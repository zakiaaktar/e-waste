import React from 'react';
import { Link } from 'react-router-dom';





const Navbar = () => {
   



    const menuItems = <>
        <li className='text-black font-semibold'><Link to='/'>Home</Link></li>
        <li className='text-black font-semibold'><Link to='/about'>About</Link></li>
        <li className='text-black font-semibold'><Link to='/services'>Services</Link></li>
        <li className='text-black font-semibold'><Link to='/summary'>Success Stories</Link></li>
        <li className='text-black font-semibold'><Link to='/ChoiceLine'>Why Choose Us</Link></li>
        <li className='text-black font-semibold'><Link to='/testimonial'>Testimonial</Link></li>
       
        <li className='text-black font-semibold'><Link to='/workers'>Our Team</Link></li>
        <li className='text-black font-semibold'><Link to='/Planning'>Planning Area</Link></li>
        <li className='text-black font-semibold'><Link to='/Faq'>FAQ</Link></li>
        <li className='text-black font-semibold'><Link to='/contact'>Contact</Link></li>
       
    </>




    return (
        <div className="navbar bg-base-100 px-6 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#05BFDB]  w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-4xl font-bold text-[#05BFDB] font-serif">e-<span className='text-2xl text-green'>waste</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/about' className="btn bg-green-500 rounded-full px-6 py-3 border-none hidden lg:block pt-4">Get started</Link>
            </div>
        </div>
    );
};

export default Navbar;