import { LiaTimesSolid } from "react-icons/lia";
// context API
import { MyContext } from "../../App";
import { useContext, useState } from "react";
// firebase
import { db, storage } from "../../firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

const DeleteBlogModal = () => {
    const {contextState, setContextState} = useContext(MyContext);
    const [isDeleting, setIsDeleting] = useState(false);
    
    // Function to handle blog deletion
    const handleDeleteBlog = async () => {
        const { id, imgPath } = contextState.blogToDelete;

        try {
            setIsDeleting(true);
            // Delete the blog from Firestore
            await deleteDoc(doc(db, "blogs", id));

            // Delete the associated image from Firebase Storage
            const imageRef = ref(storage, imgPath);
            await deleteObject(imageRef);

            // Close the modal after deletion
            setContextState((prevValues) => ({
                ...prevValues,
                showDeleteBlogModal: false,
                blogToDelete: null, // Reset blogToDelete after deletion
            }));
            setIsDeleting(false);
            alert("Blog deleted successfully.");
        } catch (error) {
            alert("Error deleting blog");
            console.error("Error deleting blog or image:", error);
        }
    };
    
    return(
        <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[rgba(0,0,0,0.6)] fixed z-10 top-0">
            <div className="w-[90%] items-center relative flex flex-col md:w-[55%] md:max-w-[787px] box-border text-center pt-[2.5rem] md:pt-[5rem] pb-[3.5rem] md:pb-[4.1rem] px-[7%] rounded-[5px] bg-white">
                {/* title */}
                <p className="text-[1.8rem] md:text-[3.2rem] text-red-500 font-bold mb-[1.8rem]">Delete Blog</p>
                {/* text */}
                <p className="text-[1.6rem] md:text-[2.8rem] font-medium mb-[2.2rem]">Are you sure you want to delete this blog?</p>
                {/* buttons */}
                <div className="flex w-full gap-[1.7rem] md:self-end">
                    <button onClick={() => {
                        setContextState((prevValues) => ({
                            ...prevValues,
                            showDeleteBlogModal: false
                        }))
                    }} className='w-[50%] px-[1rem] font-medium rounded-[0.5rem] text-gray-500 bg-gray-200 py-[1.5rem] md:py-[2.5rem]'><span className="text-[1.6rem] md:text-[2rem]">No</span></button>
                    {/* Delete button */}
                    <button onClick={handleDeleteBlog} className='w-[50%] px-[1rem] rounded-[0.5rem] py-[1.5rem] md:py-[2.5rem] bg-red-500 text-white' disabled={isDeleting}>
                        <span className="text-[1.6rem] md:text-[2rem]">
                            {isDeleting? 'Deleting...' : 'Yes'}
                        </span>
                    </button>
                </div>
                {/* cancel */}
                <div onClick={() => {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showDeleteBlogModal: false
                    }))
                }} className="cursor-pointer w-[31px] h-[31px] md:w-[65px] md:h-[65px] absolute right-[1.9rem] top-[1.9rem] justify-center rounded-full flex items-center bg-gray-f2">
                    <LiaTimesSolid className="text-[1.5rem] md:text-[2.3rem] text-black-100" />
                </div>
            </div>
        </div>
    )
}

export default DeleteBlogModal;