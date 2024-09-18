// react router
import { useLocation, useNavigate } from 'react-router-dom';
// components
import Header from "../../components/header/header.component";
import { useEffect } from 'react';

const BlogPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Check if location.state is missing or empty
    useEffect(() => {
        if (!location.state || !location.state.imgUrl || !location.state.author || !location.state.date || !location.state.title) {
            // If state is missing or incomplete, redirect to 404 page
            navigate('/404', { replace: true });
        }
    }, [location.state, navigate]);

    // Destructure state only after verifying it exists
    if (!location.state) {
        return null; // To avoid rendering if the state is being checked
    }
    
    const { imgUrl, author, date, info, title } = location.state;

    return (
        <>
            {/* Header */}
            <Header fixed />
            <div className='max-w-[1200px] pt-[120px] pb-[40px] w-[90%] mx-auto'>
                {/* blog img */}
                <div className='w-full mb-[50px]'>
                    <img className='w-full' src={imgUrl} alt={title} />
                </div>
                {/* blog title */}
                <p className='w-[90%] mx-auto text-[3.7rem] md:text-[5rem] font-bold text-center'>{title}</p>
                {/* label containing date and author */}
                <div className='flex gap-[10px] items-center w-fit my-[30px] mx-auto'>
                    {/* date */}
                    <p className="text-[1.4rem] font-extralight">{date.toUpperCase()}</p>
                    {/* dot */}
                    <span className='w-[3px] h-[3px] bg-black rounded-[50px] mt-[5px]'></span>
                    {/* author */}
                    <p className='text-[1.4rem]'>BY {author.toUpperCase()}</p>
                </div>
                {/* info adjuster */}
                <div className='w-full lg:w-[80%] mx-auto'>
                    {/* info - I'm dangerously rendering the info so as to apply the "<br />" */}
                    <p className="text-justify text-[1.4rem]" dangerouslySetInnerHTML={{__html: info}}></p>
                </div>
            </div>
        </>
    );
};

export default BlogPage;