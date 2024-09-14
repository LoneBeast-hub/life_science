// images
import Logo from '../../assets/logo.png';
// react router dom
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
    const baseRoute = '/';
    const [isSticky, setIsSticky] = useState(false);

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
                    {/* nav links */}
                    <div className='flex text-white'>
                        <NavLink to='about_us' className={({ isActive }) => isActive && location.pathname === '/about_us' ? 'active_link' : 'not_active_link border border-transparent px-[2rem] hover:text-[#c4c4c4b0] py-[1rem]'}><span className='text-[1.4rem]'>About Us</span></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;