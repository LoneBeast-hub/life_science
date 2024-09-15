// images
import Logo from '../../assets/logo.png';
// react router dom
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
// react icons
import { FiMenu } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
    const baseRoute = '/';
    const [isSticky, setIsSticky] = useState(false);
    const [showNav, setShowNav] = useState(false);

    // Handle scroll event to make header sticky
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) { // Adjust scrollY value as needed
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full ${isSticky ? 'bg-black bg-opacity-90' : 'bg-transparent py-[1rem]'} fixed top-0 left-0 z-[999] transition-all duration-300 ease-in-out`}>
            {/* adjuster */}
            <div className="max-w-[1200px] w-[90%] mx-auto py-[1rem]">
                {/* flex */}
                <div className="flex justify-between items-center">
                    {/* logo */}
                    <div>
                        <Link to={baseRoute}>
                            <img src={Logo} className='max-h-[60px]' alt="Logo" />
                        </Link>
                    </div>
                    {/* desktop nav links */}
                    <div className='hidden md:flex items-center text-white'>
                        <NavLink to='/about_us' className={({ isActive }) => isActive && location.pathname === '/about_us' ? 'active_link' : 'not_active_link border border-transparent px-[2rem] hover:text-[#c4c4c4b0] py-[1rem]'}><span className='text-[1.2rem]'>About Us</span></NavLink>
                        <NavLink to='/what_we_do' className={({ isActive }) => isActive && location.pathname === '/what_we_do' ? 'active_link' : 'not_active_link border border-transparent px-[2rem] hover:text-[#c4c4c4b0] py-[1rem]'}><span className='text-[1.2rem]'>What We Do</span></NavLink>
                        <NavLink to='/blog' className={({ isActive }) => isActive && location.pathname === '/blog' ? 'active_link' : 'not_active_link border border-transparent px-[2rem] hover:text-[#c4c4c4b0] py-[1rem]'}><span className='text-[1.2rem]'>Blog</span></NavLink>
                        <NavLink to='/case_studies' className={({ isActive }) => isActive && location.pathname === '/case_studies' ? 'active_link' : 'not_active_link border border-transparent px-[2rem] hover:text-[#c4c4c4b0] py-[1rem]'}><span className='text-[1.2rem]'>Case Studies</span></NavLink>
                        <NavLink to='/contact' className={({ isActive }) => isActive && location.pathname === '/contact' ? 'active_link' : 'not_active_link border border-transparent px-[2rem] hover:text-[#c4c4c4b0] py-[1rem]'}><span className='text-[1.2rem]'>Contact</span></NavLink>
                    </div>
                    {/* Menu icon */}
                    {
                        showNav?
                            <LiaTimesSolid onClick={() => {
                                setShowNav(false)
                            }} className="text-[2.5rem] cursor-pointer relative z-[5] md:hidden text-black" />
                        :
                            <FiMenu onClick={() => {
                                setShowNav(true)
                            }} className="text-[2.5rem] cursor-pointer relative z-[5] md:hidden text-white" />
                    }
                </div>
            </div>
            {/* mobile nav links */}
            <div className={`overflow-hidden top-0 left-0 md:hidden bg-white fixed w-[100vw] transition-all ${showNav? 'h-[100vh]' : 'h-[0]'}`}>
                <div className='flex items-center flex-col mt-[80px] w-full'>
                    <NavLink to='/about_us' className={({ isActive }) => isActive && location.pathname === '/about_us' ? 'active_link' : 'not_active_link'}><span className='text-[1.2rem]'>About Us</span></NavLink>
                    <NavLink to='/what_we_do' className={({ isActive }) => isActive && location.pathname === '/what_we_do' ? 'active_link' : 'not_active_link'}><span className='text-[1.2rem]'>What We Do</span></NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive && location.pathname === '/blog' ? 'active_link' : 'not_active_link'}><span className='text-[1.2rem]'>Blog</span></NavLink>
                    <NavLink to='/case_studies' className={({ isActive }) => isActive && location.pathname === '/case_studies' ? 'active_link' : 'not_active_link'}><span className='text-[1.2rem]'>Case Studies</span></NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive && location.pathname === '/contact' ? 'active_link' : 'not_active_link'}><span className='text-[1.2rem]'>Contact</span></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;