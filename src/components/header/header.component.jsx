// images
import Logo from '../../assets/logo.png';
// react router dom
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// react icons
import { FiMenu } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";

const Header = ({fixed}) => {
    const baseRoute = '/';
    const [isSticky, setIsSticky] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const location = useLocation();
    const isActiveLink = (path) => {
        return location.pathname.startsWith(path);
    };

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
        <div className={`w-full ${!fixed? isSticky ? 'bg-black bg-opacity-90' : 'bg-transparent py-[1rem]' : 'bg-black bg-opacity-90'} fixed top-0 left-0 z-[999] transition-all duration-300 ease-in-out`}>
            {/* adjuster */}
            <div className="max-w-[1200px] w-[90%] mx-auto py-[1rem]">
                {/* flex */}
                <div className="flex justify-between items-center">
                    {/* logo */}
                    <div>
                        <Link to={baseRoute}>
                            <img src={Logo} className='max-h-[90px]' alt="Logo" />
                        </Link>
                    </div>
                    {/* desktop nav links */}
                    <div className='hidden md:flex items-center text-white'>
                        <NavLink to='/about_us' className={({ isActive }) => isActive && location.pathname === '/about_us' ? 'active_link' : 'not_active_link border border-transparent px-[2rem] hover:text-[#c4c4c4b0] py-[1rem]'}><span className='text-[1.2rem]'>About Us</span></NavLink>
                        <NavLink to='/what_we_do' className={({ isActive }) => isActive && location.pathname === '/what_we_do' ? 'active_link' : 'not_active_link border border-transparent px-[2rem] hover:text-[#c4c4c4b0] py-[1rem]'}><span className='text-[1.2rem]'>What We Do</span></NavLink>
                        <NavLink to='/blogs' className={({ isActive }) => isActiveLink('/blogs')? 'active_link' : 'not_active_link border border-transparent px-[2rem] hover:text-[#c4c4c4b0] py-[1rem]'}><span className='text-[1.2rem]'>Blogs</span></NavLink>
                        <NavLink to='/clients' className={({ isActive }) => isActive && location.pathname === '/clients' ? 'active_link' : 'not_active_link border border-transparent px-[2rem] hover:text-[#c4c4c4b0] py-[1rem]'}><span className='text-[1.2rem]'>Clients</span></NavLink>
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
                    <NavLink to='/blogs' className={({ isActive }) => isActiveLink('/blogs')? 'active_link' : 'not_active_link'}><span className='text-[1.2rem]'>Blog</span></NavLink>
                    <NavLink to='/clients' className={({ isActive }) => isActive && location.pathname === '/clients' ? 'active_link' : 'not_active_link'}><span className='text-[1.2rem]'>Clients</span></NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive && location.pathname === '/contact' ? 'active_link' : 'not_active_link'}><span className='text-[1.2rem]'>Contact</span></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;