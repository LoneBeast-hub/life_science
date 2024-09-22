// react icons
import { MdEdit, MdDelete } from "react-icons/md";

const AdminBlogCard = ({imgUrl, date, author, title, info, id}) => {
    // blog card style
    const AdminblogCardStyle = {
        backgroundImage: `url(${imgUrl})`
    }
    return(
        <div className="bg-cover bg-no-repeat pt-[40%] rounded-[30px] pb-[30px] relative z-0" style={AdminblogCardStyle}>
            {/* edit and delete actions */}
            <div className="absolute top-[20px] right-[20px] flex gap-[5px]">
                <div className="bg-white cursor-pointer text-black p-[5px] rounded-xl">
                    <MdEdit className="text-[1.8rem]" />
                </div>
                <div className="bg-white cursor-pointer text-black p-[5px] rounded-xl">
                    <MdDelete className="text-[1.8rem]" />
                </div>
            </div>
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
                    <p className="overflow-hidden text-white whitespace-nowrap text-ellipsis w-full h-[100%] text-[1.4rem]">{info}</p>
                </div>
            </div>
            {/* black opacity overlay */}
            <div className="bg-[rgba(0,0,0,0.3)] w-full h-full absolute top-0 rounded-[30px] z-[-1]"></div>
        </div>
    )
}

export default AdminBlogCard;