import Header from "../../components/header/header.component";

const AdminAuthPage = () => {
    const handleLogin = (e) => {
        e.preventDefault();
    }
    return(
        <>
            {/* header */}
            <Header fixed />
            <div className="border border-[#bababa] sm:w-[400px] p-[20px] mt-[120px] mb-[40px] w-[90%] mx-auto">
                {/* heading */}
                <h1 className="text-6xl font-bold text-center mb-[30px]">Admin Login</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-[20px]">
                    {/* Email */}
                    <input type="email" placeholder="Email" className="text-[1.6rem] border border-[#bababa] w-full py-[5px] px-[10px]" />
                    <input type="password" placeholder="Password" className="text-[1.6rem] border border-[#bababa] w-full py-[5px] px-[10px]" />
                    {/* submit */}
                    <button type="submit" className="hover:text-black hover:bg-transparent text-white bg-black border-black transition-all border text-[1.2rem] py-[1.4rem] px-[3rem] w-full">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AdminAuthPage;