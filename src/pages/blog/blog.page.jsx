// react router
import { useLocation } from 'react-router-dom';

const BlogPage = () => {
    const location = useLocation();
    const { imgUrl, author, date, info, title } = location.state;

    return(
        <div className='max-w-[1200px] py-[4rem] w-[90%] mx-auto'>
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
                {/* info - I'm dangrously rendering the info so as to apply the "<br />"*/}
                <p className="text-justify text-[1.4rem]" dangerouslySetInnerHTML={{__html: info}}>
                </p>
            </div>
        </div>
    )
}

export default BlogPage;