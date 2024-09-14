// react router
import { Link } from 'react-router-dom';

const CTAButton = ({children, whiteColored, blackColored, path}) => {
    return(
        <Link to={path} className={`${blackColored? 'text-white bg-black border-black hover:text-black hover:bg-transparent' : ''} ${whiteColored? 'text-black bg-white hover:text-white hover:bg-transparent' : ''} py-[1.4rem] hover:text-black hover:bg-white text-white transition-all border border-white px-[3rem] text-[1.2rem]`}>{children}</Link>
    )
}

export default CTAButton;