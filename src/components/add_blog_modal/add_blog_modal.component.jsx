import { LiaTimesSolid } from "react-icons/lia";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import { db, storage } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import dayjs from "dayjs";

const AddBlogModal = () => {
  const { setContextState } = useContext(MyContext);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Our research');
  const [image, setImage] = useState(null); // To store the selected image
  const [loading, setLoading] = useState(false); // To show loading while uploading

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Get the selected image file
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please upload an image.");
      return;
    }

    setLoading(true); // Start loading

    try {
      // Upload image to Firebase Storage
      const imagePath = `blogs/${image.name}-${Date.now()}`;
      const imageRef = ref(storage, imagePath);
      await uploadBytes(imageRef, image);
      const imgUrl = await getDownloadURL(imageRef);

      // Add new blog entry to Firestore
      await addDoc(collection(db, "blogs"), {
        title,
        info,
        author,
        category,
        imgUrl,
        imgPath: imagePath, // Save image path for later deletion
        date: dayjs().format("YYYY-MM-DD") // Use the current date
      });

      alert("Blog added successfully!");

      // Close the modal after adding the blog
      setContextState((prevValues) => ({
        ...prevValues,
        showAddBlogModal: false
      }));

    } catch (error) {
      console.error("Error adding blog: ", error);
      alert("Failed to add blog.");
    }

    setLoading(false); // Stop loading
  };

  return (
    <div className="w-[100%] min-h-[100vh] py-[2.5rem] flex items-start justify-center bg-[rgba(0,0,0,0.6)] fixed z-10 top-0 left-0 overflow-y-auto">
        <div className="w-[90%] relative max-h-[90vh] overflow-y-scroll md:w-[85%] md:max-w-[993px] box-border pt-[2.5rem] md:pt-[5rem] pb-[3rem] md:pb-[4rem] px-[7%] md:px-[4%] rounded-[5px] bg-white">
            <p className="text-[2.4rem] text-center md:text-left md:text-[3.2rem] font-bold">Add Blog</p>
            <form onSubmit={handleAddBlog} className="mt-[2.4rem] flex flex-col md:mt-[2.2rem]">
            <div className="flex w-full flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                <label htmlFor="title" className="text-[1.4rem] md:text-[2rem] text-black-100">Title</label>
                <input onChange={(e) => setTitle(e.target.value)} required value={title} className="border w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="title" id="title" placeholder="Enter title" />
            </div>

            <div className="flex w-full mt-[20px] flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                <label htmlFor="info" className="text-[1.4rem] md:text-[2rem] text-black-100">Description</label>
                <textarea 
                    onChange={(e) => setInfo(e.target.value)}
                    required 
                    value={info} 
                    className="border resize-none w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" 
                    name="info" 
                    id="info" 
                    placeholder="Enter description"
                    rows="4"
                />
            </div>

            <div className="flex w-full mt-[20px] flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                <label htmlFor="author" className="text-[1.4rem] md:text-[2rem] text-black-100">Author</label>
                <input onChange={(e) => setAuthor(e.target.value)} required value={author} className="border w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="author" id="author" placeholder="Enter author" />
            </div>

            <div className="flex w-full mt-[20px] flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                <label htmlFor="category" className="text-[1.4rem] md:text-[2rem] text-black-100">Category</label>
                <select onChange={(e) => setCategory(e.target.value)} required value={category} className="border border-gray-e5 w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" name="category" id="category">
                <option value="Our research">Our research</option>
                <option value="Industry trends">Industry trends</option>
                </select>
            </div>

            {/* Image upload */}
            <div className="flex w-full mt-[20px] flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                <label htmlFor="image" className="text-[1.4rem] md:text-[2rem] text-black-100">Upload Image</label>
                <input onChange={handleImageChange} required className="border w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="file" name="image" id="image" />
            </div>

            <div className="flex w-full mt-[1.6rem] md:mt-[3rem] md:w-[50%] gap-[1.7rem] md:gap-[2.1rem] md:self-end">
                <button onClick={() => setContextState((prevValues) => ({ ...prevValues, showAddBlogModal: false }))} type="button" className='w-[50%] bg-gray-200 text-gray-500 px-[1rem] rounded-[0.5rem] py-[1.5rem] md:py-[2.5rem]'><span className="text-[1.6rem] md:text-[2rem]">Cancel</span></button>
                <button type="submit" className='w-[50%] bg-black text-white px-[1rem] rounded-[0.5rem] py-[1.5rem] text-[1.6rem] md:py-[2.5rem]' disabled={loading}>
                {loading ? 'Uploading...' : 'Add Blog'}
                </button>
            </div>
            </form>

            <span className="absolute top-[1rem] right-[1rem] text-black text-[2.4rem] md:text-[2.8rem] cursor-pointer" onClick={() => setContextState((prevValues) => ({ ...prevValues, showAddBlogModal: false }))}>
            <LiaTimesSolid />
            </span>
        </div>
    </div>
  );
};

export default AddBlogModal;