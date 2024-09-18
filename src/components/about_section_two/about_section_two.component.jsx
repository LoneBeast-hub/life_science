// components
import CTAButton from "../cta_button/cta_button.component";
// style
import './about_section_two.style.css'

const AboutSectionTwo = () => {
    return(
        <div className="w-full py-[4rem] bg-white">
            {/* adjuster */}
            <div className="max-w-[1200px] w-[90%] mx-auto">
                {/* our mission */}
                <div className="flex flex-col gap-[2rem]">
                    {/* heading */}
                    <p className="text-[2.4rem] leading-[1.25] md:text-[3.7rem] font-bold">Our <span className="text-[2.4rem] md:text-[3.7rem] text-[#f67a20]">Mission</span></p>
                    {/* body */}
                    <p className="text-[1.8rem]">
                        At Life & Med Tech Consulting, we bring together a team of 
                        industry veterans with deep expertise in life sciences, 
                        medical sciences, engineering, business, and IT. This 
                        unique blend allows us to deliver customized, comprehensive 
                        strategies that help organizations meet their business objectives 
                        while driving innovation.
                    </p>
                    {/* cta */}
                    <CTAButton path='/what_we_do' bgBlack>See What We Do</CTAButton>
                </div>
                {/* fixed bg */}
                <div className="w-full my-[4rem] about_section_two_bg h-[60px] md:h-[120px] bg-fixed bg-cover bg-no-repeat"></div>
                {/* our goal */}
                <div className="flex flex-col items-end gap-[2rem]">
                    {/* heading */}
                    <p className="text-[2.4rem] leading-[1.25] md:text-[3.7rem] font-bold">Our <span className="text-[2.4rem] md:text-[3.7rem] text-[#f67a20]">Goal</span></p>
                    {/* body */}
                    <p className="text-[1.8rem] text-right">
                        Our goal is to support you in making informed decisions that improve 
                        both patient outcomes and business success.
                    </p>
                    {/* cta */}
                    <CTAButton path='/what_we_do' bgBlack>See What We Do</CTAButton>
                </div>
                {/* fixed bg */}
                <div className="w-full my-[4rem] about_section_two_bg h-[60px] md:h-[120px] bg-fixed bg-cover bg-no-repeat"></div>
                {/* our focus */}
                <div className="flex flex-col gap-[2rem]">
                    {/* heading */}
                    <p className="text-[2.4rem] leading-[1.25] md:text-[3.7rem] font-bold">Our <span className="text-[2.4rem] md:text-[3.7rem] text-[#f67a20]">Focus</span></p>
                    {/* body */}
                    <p className="text-[1.8rem]">
                        Our team’s interdisciplinary knowledge and commitment to excellence ensure 
                        that we can tackle the most complex challenges, from navigating regulatory 
                        landscapes to providing top-tier medical writing that supports your clinical 
                        and marketing goals.
                        <br/>
                        Together, we make sure your projects are not only compliant and efficient but 
                        also ready to transform the future of healthcare.
                    </p>
                    {/* cta */}
                    <CTAButton path='/clients' bgBlack>See Our Clients</CTAButton>
                </div>
            </div>
        </div>
    )
}

export default AboutSectionTwo;