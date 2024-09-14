// images
import FooterImg from '../../assets/footer_img.png';
import CTAButton from '../cta_button/cta_button.component';

const Footer = () => {
    return(
        <div className="py-[6rem] bg-[#e0e0e080]">
            {/* adjuster */}
            <div className="max-w-[1200px] w-[90%] mx-auto">
                {/* img */}
                <img className='w-full' src={FooterImg} alt="Partnership" />
                {/* contact section */}
                <div className='flex border-t items-center lg:flex-row border-b mt-[5rem] py-[2rem] border-[#00000021] flex-col gap-[2rem] justify-between'>
                    {/* contact details */}
                    <div className='flex flex-col gap-[1rem] text-center lg:text-left'>
                        {/* address */}
                        <p className='text-[1.2rem]'>38 Honeycrisp Crescent, Vaughan, Ontario, L4K 0M8</p>
                        {/* phone */}
                        <p className='text-[1.2rem]'>(437) 410-2473</p>
                        {/* email */}
                        <p className='text-[1.2rem]'>porchlyt@gmail.com</p>
                    </div>
                    {/* contact links */}
                    <div className='flex flex-col'>
                        <CTAButton blackColored path='/contact_us'>Contact Us</CTAButton>
                        {/* links */}
                        <div className="flex">

                        </div>
                    </div>
                    {/* read whitepaper */}
                    <div className="flex flex-col">
                        <CTAButton blackColored>read our whitepaper</CTAButton>
                    </div>
                </div>
                {/* copyright */}
                <p className='text-[1.4rem] text-center mt-[2rem]'>
                    Copyright Top Elite strategy group, a Herspiegel Company 2024
                    {/* privacy policy */}
                </p>
            </div>
        </div>
    )
}

export default Footer;