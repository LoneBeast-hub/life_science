// react router
import { useLocation } from 'react-router-dom';

const BlogPage = () => {
    const location = useLocation();
    const { imgUrl, author, date, info, title } = location.state;

    return(
        <div className='max-w-[1200px] py-[4rem] w-[90%] mx-auto'>

        </div>
    )
}