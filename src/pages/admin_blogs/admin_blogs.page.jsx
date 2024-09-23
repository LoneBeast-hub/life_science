// component
import DashboardHeader from "../../components/dashboard_header/dashboard_header.component";
// react and context api
import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import { FaPlus } from "react-icons/fa";
import AdminBlogsSection from "../../components/admin_blogs_section/admin_blogs_section.component";
// firebase
import { db } from "../../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const AdminBlogsPage = () => {
    const {setContextState} = useContext(MyContext);
    const adminDashboardRoute = '/admin_dashboard';

    useEffect(() => {
        // Reference the 'blogs' collection in Firebase
        const blogsCollectionRef = collection(db, "blogs");

        // Subscribe to changes in the blogs collection
        const unsubscribe = onSnapshot(blogsCollectionRef, (snapshot) => {
            const blogsArray = snapshot.docs.map((doc) => ({
                id: doc.id, // Firebase assigns an ID to each document
                ...doc.data(), // Spread other document data (imgUrl, date, author, category, title, info)
            }));

            // Update the context state with the new blogs data
            setContextState((prevValues) => ({
                ...prevValues,
                blogsData: blogsArray
            }));
        });

        // Cleanup subscription on component unmount
        return () => unsubscribe();
    }, [setContextState])

    return(
        <div>
            {/* header */}
            <DashboardHeader pageName='Blogs' routeTo={`${adminDashboardRoute}/blogs`} />
            {/* body */}
            <div className="w-[90%] mx-auto">
                {/* heading */}
                <p className="text-primary-100 mb-[2.1rem] font-bold text-[2rem] md:text-[3.2rem]">Blogs</p>
                {/* search and add */}
                <div onClick={() => {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showAddBlogModal: true
                    }))
                }} className="flex w-fit items-center gap-[5px] cursor-pointer mb-[20px]">
                    <div className="bg-black p-[7px] flex">
                        <FaPlus className="text-[2rem] text-white" />
                    </div>
                    <p className="text-[1.6rem]">Add Blog</p>
                </div>
                {/* blogs section */}
                <AdminBlogsSection />
            </div>
        </div>
    )
}

export default AdminBlogsPage;