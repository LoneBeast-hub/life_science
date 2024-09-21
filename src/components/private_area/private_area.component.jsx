// context and react
import { MyContext } from "../../App";
import { useContext } from "react";
// images
import Logo from '../../assets/logo_black.png';
// react icons
import { FaFolderOpen, FaHome } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
// react router
import { NavLink, Link, Routes, Route } from "react-router-dom";
import AdminBlogsPage from "../../pages/admin_blogs/admin_blogs.page";

const PrivateArea = () => {
    const {contextState, setContextState} = useContext(MyContext);
    const adminDashboardRoute = '/admin_dashboard';
    return(
        <div>
            <div className="flex w-full">
                {/* desktop sidebar */}
                <div className={`min-w-[263px] z-10 bg-white box-border border-r-[1px] border-r-gray-e5 fixed transition-all ${contextState.showNav? 'left-[0]' : 'left-[-100%]'} lg:left-0 top-0 px-[2.45rem] pt-[3.6rem] gap-[3.6rem] flex-col min-h-[100vh] flex`}>
                    {/* logo */}
                    <img src={Logo} className="max-w-[160px] mx-auto max-h-[82px]" alt="Life and MedTech Logo" />
                    {/* routes container */}
                    <div className="h-full relative">
                        <div className="flex flex-col gap-[0.5rem]">
                            <NavLink
                                to={adminDashboardRoute}
                                className={({ isActive }) => isActive && location.pathname === adminDashboardRoute ? 'active_dashboard_link flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]' : 'flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]'}
                            >
                                <FaHome className="text-[2rem]" />
                                <span className="text-[1.8rem]">Home</span>
                            </NavLink>
                            <NavLink
                                to={`${adminDashboardRoute}/blogs`}
                                className={({ isActive }) => isActive && location.pathname === `${adminDashboardRoute}/blogs` ? 'active_dashboard_link flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]' : 'flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]'}
                            >
                                <FaFolderOpen className="text-[2rem]" />
                                <span className="text-[1.8rem]">Blogs</span>
                            </NavLink>
                        </div>
                    </div>
                    {/* logout */}
                    <Link to='/' className="absolute bottom-[7.2rem] left-[3.6rem] font-medium gap-[1rem] flex items-center text-black-2"><AiOutlineLogout className="text-[2rem] transform -rotate-90" /> <span className="text-[2rem]">Logout</span></Link>
                </div>
                {/* sidebar frame */}
                <div className="min-w-[263px] min-h-[100vh] hidden lg:flex"></div>
                {/* pages container */}
                <div onClick={() => {
                    return contextState.showNav?
                        setContextState((prevValues) => ({
                            ...prevValues,
                            showNav: false
                        }))
                    :
                        ''
                }} className="w-full pb-[2.4rem]">
                    {/* Routes */}
                    <Routes>
                        {/* <Route path={adminDashboardRoute} exact element={<MembersDashboardPage />} /> */}
                        <Route path={`${adminDashboardRoute}/blogs`} element={<AdminBlogsPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default PrivateArea;