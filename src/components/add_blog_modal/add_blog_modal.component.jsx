// react icons
import { LiaTimesSolid } from "react-icons/lia";
// context api
import { useContext, useState } from "react";
import { MyContext } from "../../App";

const AddBlogModal = () => {
    const {setContextState} = useContext(MyContext);
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    return(
        <div className="w-[100%] min-h-[100vh] py-[2.5rem] flex items-start justify-center bg-[rgba(0,0,0,0.6)] fixed z-10 top-0 left-0 overflow-y-auto">
            <div className="w-[90%] relative max-h-[90vh] overflow-y-scroll md:w-[85%] md:max-w-[993px] box-border pt-[2.5rem] md:pt-[5rem] pb-[3rem] md:pb-[4rem] px-[7%] md:px-[4%] rounded-[5px] bg-white">
                {/* Title */}
                <p className="text-[2.4rem] text-center md:text-left md:text-[3.2rem] font-bold">Add Blog</p>
                {/* form */}
                <form className="mt-[2.4rem] flex flex-col md:mt-[2.2rem]">
                    {/* Title input */}
                    <div className="flex w-full flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="title" className="text-[1.4rem] md:text-[2rem] text-black-100">Title</label>
                        <input onChange={(e) => {
                            setTitle(e.target.value)
                        }} required value={title} className="border w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="title" id="title" placeholder="Enter title" />
                    </div>
                    {/* info input */}
                    <div className="flex w-full mt-[20px] flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="info" className="text-[1.4rem] md:text-[2rem] text-black-100">Description</label>
                        <input onChange={(e) => {
                            setInfo(e.target.value)
                        }} required value={info} className="border w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="info" id="info" placeholder="Enter description" />
                    </div>
                    {/* author input */}
                    <div className="flex w-full mt-[20px] flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="author" className="text-[1.4rem] md:text-[2rem] text-black-100">Author</label>
                        <input onChange={(e) => {
                            setAuthor(e.target.value)
                        }} required value={author} className="border w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="author" id="author" placeholder="Enter author" />
                    </div>
                    {/* category input */}
                    <div className="flex w-full mt-[20px] flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="category" className="text-[1.4rem] md:text-[2rem] text-black-100">Category</label>
                        <select onChange={(e) => {
                            setCategory(e.target.value)
                        }} required value={category} className="border border-gray-e5 w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" name="category" id="category">
                            <option value="Our research">Our research</option>
                            <option value="Industry trends">Industry trends</option>
                        </select>
                    </div>
                    {/* buttons */}
                    <div className="flex w-full mt-[1.6rem] md:mt-[3rem] md:w-[50%] gap-[1.7rem] md:gap-[2.1rem] md:self-end">
                        <button onClick={() => {
                            setContextState((prevValues) => ({
                                ...prevValues,
                                showAddBlogModal: false
                            }))
                        }} type="button" className='w-[50%] bg-gray-200 text-gray-500 px-[1rem] rounded-[0.5rem] py-[1.5rem] md:py-[2.5rem]' grayColored><span className="text-[1.6rem] md:text-[2rem]">Cancel</span></button>
                        <button type="submit" className='w-[50%] bg-black text-white px-[1rem] rounded-[0.5rem] py-[1.5rem] md:py-[2.5rem]' primaryColored><span className="text-[1.6rem] md:text-[2rem]">Add</span></button>
                    </div>
                </form>
                {/* cancel */}
                <div onClick={() => {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showAddBlogModal: false
                    }))
                }} className="cursor-pointer w-[31px] h-[31px] md:w-[65px] md:h-[65px] absolute right-[1.9rem] top-[1.9rem] justify-center rounded-full flex items-center bg-gray-f2">
                    <LiaTimesSolid className="text-[1.5rem] md:text-[2.3rem] text-black-100" />
                </div>
            </div>
        </div>
    )
}

export default AddBlogModal;