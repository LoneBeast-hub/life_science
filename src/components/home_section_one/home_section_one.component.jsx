import CTAButton from '../cta_button/cta_button.component';
import './home_section_one.style.css'

const HomeSectionOne = () => {
    return(
        <div className="w-full flex items-center relative min-h-[100vh] max-h-[880px] home_section_one_bg bg-cover bg-no-repeat">
            {/* bg-overlay */}
            <div className="bg-[#00000028] z-[0] w-full h-full absolute top-0"></div>
            {/* adjuster */}
            <div className="max-w-[1200px] relative z-[1] w-[90%] mx-auto py-[130px] lg:py-[240px]">
                <div className='h-fit'>
                    {/* title */}
                    <p className='text-white text-[4rem] md:text-[4.8rem] font-bold leading-[1.15] tracking-[-0.3rem]'>Unlocking Innovation in <span className='text-[#f67a20] text-[4rem] md:text-[4.8rem]'>Life Sciences and Medical Affairs</span></p>
                    {/* sub title */}
                    <p className="text-white text-[1.4rem] text-justify mt-[30px] md:text-[1.8rem] md:max-w-[60%]">
                        At Top Elite Strategy Group, we help healthcare, biotech, 
                        and life science companies turn scientific innovation into 
                        actionable strategies. Our team of experts from <span className='text-[1.4rem] md:text-[1.8rem] font-bold'>life sciences, 
                        medical sciences, engineering, business, and IT</span> is dedicated to 
                        providing insights and solutions that enhance product development, 
                        regulatory compliance, market access, and business growth. Whether 
                        it’s optimizing operational efficiency or crafting accurate, impactful 
                        medical writing, we’re here to help you thrive.
                    </p>
                    {/* buttons */}
                    <div className="flex gap-[2rem] mt-[20px]">
                        <CTAButton path='/what_we_do' bgWhite>What We Do</CTAButton>
                        <CTAButton path='/about_us' bgTransparent>About Us</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionOne;