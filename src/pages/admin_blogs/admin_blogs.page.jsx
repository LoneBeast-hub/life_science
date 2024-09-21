// component
import DashboardHeader from "../../components/dashboard_header/dashboard_header.component";
// react
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AdminBlogsSection from "../../components/admin_blogs_section/admin_blogs_section.component";

const AdminBlogsPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const adminDashboardRoute = '/admin_dashboard';
    return(
        <div>
            {/* header */}
            <DashboardHeader pageName='Blogs' routeTo={`${adminDashboardRoute}/blogs`} />
            {/* body */}
            <div className="w-[90%] mx-auto">
                {/* heading */}
                <p className="text-primary-100 mb-[2.1rem] font-bold text-[2rem] md:text-[3.2rem]">Blogs</p>
                {/* search and add */}
                <div className="flex justify-between items-center">
                    <input onChange={(e) => {
                        setSearchValue(e.target.value);
                    }} defaultValue={searchValue} placeholder='Search' className='text-[1.5rem] border py-[5px] px-[10px] border-[#bababa] bg-transparent' type="text" />
                    <div className="bg-black p-[7px] cursor-pointer">
                        <FaPlus className="text-[2rem] text-white" />
                    </div>
                </div>
                {/* blogs section */}
                <AdminBlogsSection />
            </div>
        </div>
    )
}

export default AdminBlogsPage;