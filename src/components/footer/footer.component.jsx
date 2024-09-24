// images
// import FooterImg from '../../assets/footer_img.png';
import CTAButton from '../cta_button/cta_button.component';
// react icons
import { FaTwitter, FaInstagram, FaLinkedinIn, FaSearch } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
// react hooks and context api
import { useState, useContext } from 'react';
import { MyContext } from '../../App';

const Footer = () => {
    const {setContextState} = useContext(MyContext);
    const [searchValue, setSearchValue] = useState('');

    return(
        <div className="pb-[6rem] bg-[#e0e0e080]">
            {/* adjuster */}
            <div className="max-w-[1200px] w-[90%] mx-auto">
                {/* img */}
                {/* <img className='w-full' src={FooterImg} alt="Partnership" /> */}
                {/* contact section */}
                <div className='flex items-center lg:flex-row border-b py-[2rem] border-[#00000021] flex-col gap-[2rem] justify-between'>
                    {/* contact details */}
                    <div className='flex flex-col gap-[1rem] text-center lg:text-left'>
                        {/* address */}
                        <p className='text-[1.2rem]'>38 Honeycrisp Crescent, Vaughan, Ontario, L4K 0M8</p>
                        {/* phone */}
                        <p className='text-[1.2rem]'>(437) 410-2473</p>
                        {/* email */}
                        <p className='text-[1.2rem]'>contact@lifeandmedtech.com</p>
                    </div>
                    {/* contact links */}
                    <div className='flex flex-col'>
                        <CTAButton bgBlack path='/contact'>Contact Us</CTAButton>
                        {/* links */}
                        <div className="flex mt-[3.5rem] justify-center gap-[0.5rem]">
                            <a target='_blank' href="https://x.com/lifeandmedtech"><FaTwitter className='text-[2rem]' /></a>
                            <a target='_blank' href="https://www.instagram.com/lifeandmedtech/?utm_source=ig_web_button_share_sheet"><FaInstagram className='text-[2rem]' /></a>
                            <a target='_blank' href="https://www.linkedin.com/company/lifeandmedtech"><FaLinkedinIn className='text-[2rem]' /></a>
                            <a href="mailto:contact@lifeandmedtech.com"><MdOutlineEmail className='text-[2rem]' /></a>
                        </div>
                    </div>
                    {/* read whitepaper */}
                    <div className="flex flex-col items-center lg:items-end">
                        <CTAButton path='/blogs' clickFunction={() => {
                            setContextState((prevValues) => {
                                return(({
                                    ...prevValues,
                                    selectedCategory: 'Our research'
                                }))
                            })
                        }} bgBlack>Read Our Scientific Breakthroughs</CTAButton>
                        {/* search */}
                        <form className='mt-[2rem]' onSubmit={(e) => {e.preventDefault()}}>
                            <div className='relative py-[1rem] px-[2rem] w-full border border-[#00000071]'>
                                <input onChange={(e) => {
                                    setSearchValue(e.target.value);
                                }} defaultValue={searchValue} placeholder='Search' className='text-[1.5rem] bg-transparent' type="text" />
                                <button type='submit'><FaSearch className='text-[1.2rem] absolute transform -translate-y-[50%] top-[50%] right-[7px]' /></button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* copyright */}
                <p className='text-[1.4rem] text-center mt-[2rem]'>
                    Copyright &copy; 2024 Life & MedTech Consulting. All Rights Reserved
                    {/* privacy policy */}
                </p>
            </div>
        </div>
    )
}

export default Footer;