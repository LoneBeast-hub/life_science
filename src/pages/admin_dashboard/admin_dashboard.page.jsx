import CTAButton from "../../components/cta_button/cta_button.component"

const AdminDashboard = () => {
    return(
        <div className="text-center h-[100vh] flex gap-[10px] justify-center items-center">
            <p  className="text-[2.4rem] font-semibold">Go to</p>
            <CTAButton path='/admin_dashboard/blogs' bgBlack>Blogs</CTAButton>
        </div>
    )
}

export default AdminDashboard;