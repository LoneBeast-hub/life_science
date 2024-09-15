// react router
import { Link } from 'react-router-dom';

const CTAButton = ({children, bgWhite, bgBlack, bgTransparent, path}) => {
    return(
        <Link to={path} className={`${bgTransparent? 'hover:text-black hover:bg-white text-white bg-transparent border-white' : ''} ${bgWhite? 'hover:text-white hover:bg-transparent text-black bg-white border-white' : ''} ${bgBlack? 'hover:text-black hover:bg-transparent text-white bg-black border-black' : ''} transition-all border text-[1.2rem] py-[1.4rem] px-[3rem]`}>{children}</Link>
    )
}

export default CTAButton;