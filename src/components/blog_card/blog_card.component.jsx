// react router
import { Link } from "react-router-dom";

const BlogCard = ({imgUrl, date, author, title, info, id}) => {
    const blogInfo = {
        imgUrl,
        date,
        author,
        title,
        info,
        id
    }
    // blog card style
    const blogCardStyle = {
        backgroundImage: `url(${imgUrl})`
    }
    return(
        <div className="bg-cover bg-no-repeat pt-[40%] rounded-[30px] pb-[30px] relative z-0" style={blogCardStyle}>
            {/* card content */}
            <div className="w-[90%] mx-auto flex flex-col gap-[15px]">
                {/* label contiaining date and author */}
                <div className="flex gap-[10px] items-center text-[1.2rem]">
                    {/* date */}
                    <p className="text-[1.4rem] text-white">{date}</p>
                    {/* dot */}
                    <span className="w-[3px] h-[3px] bg-white rounded-full mt-[5px]"></span>
                    {/* author */}
                    <p className="text-[1.4rem] text-white">by {author}</p>
                </div>
                {/* blog title */}
                <p className="text-[2rem] text-white font-semibold overflow-hidden whitespace-nowrap text-ellipsis">{title}</p>
                {/* card info wrapper */}
                <div className="flex sm:gap-[15px] justify-between flex-col sm:flex-row items-start gap-[20px] sm:items-center">
                    {/* info */}
                    <p className="overflow-hidden text-white whitespace-nowrap text-ellipsis w-[70%] h-[100%] text-[1.4rem]">{info}</p>
                    {/* link */}
                    <Link to={`/blogs/${id}`} state={blogInfo}>
                        <button className="w-[175px] p-[1.3rem] text-[1.6rem] rounded-[50px] cursor-pointer text-black bg-white border-2 border-white transition-all duration-150 ease-in-out hover:bg-transparent hover:text-white hover:ease-out">Read more</button>
                    </Link>
                </div>
            </div>
            {/* black opacity overlay */}
            <div className="bg-[rgba(0,0,0,0.3)] w-full h-full absolute top-0 rounded-[30px] z-[-1]"></div>
        </div>
    )
}

export default BlogCard;