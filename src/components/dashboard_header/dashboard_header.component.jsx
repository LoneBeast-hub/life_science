// images
import { Link } from 'react-router-dom';
// react icons
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
// use context
import { useContext } from 'react';
import { MyContext } from '../../App';

const DashboardHeader = ({pageName, routeTo}) => {
    const {contextState, setContextState} = useContext(MyContext);

    return(
        <div id="lodComponent" className="flex items-center z-0 relative justify-between pt-[2.7rem] w-[90%] mx-auto pb-[0.9rem]">
            {/* Page name */}
            <div className='flex gap-[1rem]'>
                <button
                 className={`absolute transition-all ${contextState.showNav? 'left-[263px]' : 'left-0'} block lg:hidden text-primary-100`} 
                 onClick={() => {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showNav: !contextState.showNav
                    }))
                 }} 
                >
                    {contextState.showNav ? <FaTimes className="text-[2.4rem] fixed" /> : <GiHamburgerMenu className="text-[2.4rem]" />}
                </button>
                {/* hamburger frame */}
                <GiHamburgerMenu
                 className={`text-[2.4rem] z-10 transition-all ${contextState.showNav? 'w-0' : 'w-fit'} invisible block lg:hidden text-primary-100`}
                />
                <p className="gap-1 font-medium self-center">
                    <span className="text-black-100 text-[1.4rem] md:text-[2rem]">Home</span>
                    {pageName? <Link to={routeTo} className="text-primary-100 text-[1.4rem] md:text-[2rem]"> &gt; <span className='underline text-[1.4rem] md:text-[2rem]'>{pageName}</span></Link> : ''}
                </p>
            </div>
        </div>
    )
}

export default DashboardHeader;