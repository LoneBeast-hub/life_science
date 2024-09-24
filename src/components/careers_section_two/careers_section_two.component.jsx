// style
import './careers_section_two.style.css'

const CareersSectionTwo = () => {
    return(
        <div className="w-full py-[4rem] bg-white">
            {/* adjuster */}
            <div className="max-w-[1200px] w-[90%] mx-auto">
                {/* Join Our Team */}
                <div className="flex flex-col gap-[2rem]">
                    {/* heading */}
                    <p className="text-[2.4rem] leading-[1.25] md:text-[3.7rem] font-bold">Join <span className="text-[2.4rem] md:text-[3.7rem] text-[#f67a20]">Our Team</span></p>
                    {/* body */}
                    <p className="text-[1.8rem]">
                        At Life & MedTech Consulting, we're always looking for talented 
                        and passionate individuals with expertise in healthcare, biotech, 
                        and life sciences. As we continue to grow, we’re eager to collaborate 
                        with professionals from diverse fields, including life sciences, medical 
                        sciences, engineering, business, and IT, who are driven to turn scientific 
                        innovation into impactful solutions.
                        <br /><br />
                        If you have a background in regulatory compliance, product development, 
                        market access, or medical and scientific communications, we’d love to hear 
                        from you. Submit your resume today, and we’ll keep your information on file. 
                        Once a suitable project opens up, we’ll reach out to explore the opportunity 
                        of having you join our dynamic team.
                    </p>
                </div>
                {/* fixed bg */}
                <div className="w-full my-[4rem] careers_section_two_bg h-[60px] md:h-[120px] bg-fixed bg-cover bg-no-repeat"></div>
                {/* Why Join Us */}
                <div>
                    {/* heading */}
                    <p className="text-[2.4rem] mb-[20px] leading-[1.25] md:text-[3.7rem] font-bold">Why <span className="text-[2.4rem] md:text-[3.7rem] text-[#f67a20]">Join Us</span></p>
                    {/* body */}
                    <ul className='list-disc list-inside'>
                        <li className='text-[1.8rem]'>Work alongside a multidisciplinary team of experts.</li>
                        <li className='text-[1.8rem]'>Contribute to cutting-edge projects in healthcare and life sciences.</li>
                        <li className='text-[1.8rem]'>Help businesses enhance product development and regulatory pathways.</li>
                        <li className='text-[1.8rem]'>Let’s shape the future of healthcare together. Submit your resume at contact@lifeandmedtech.com, and we’ll be in touch as new opportunities arise!</li>
                    </ul>
                </div>
                {/* fixed bg */}
                <div className="w-full my-[4rem] careers_section_two_bg h-[60px] md:h-[120px] bg-fixed bg-cover bg-no-repeat"></div>
                {/* Our Open positions */}
                <div>
                    {/* heading */}
                    <p className="text-[2.4rem] mb-[20px] leading-[1.25] md:text-[3.7rem] font-bold">Our<span className="text-[2.4rem] md:text-[3.7rem] text-[#f67a20]"> Open positions</span></p>
                    {/* body */}
                    <p className='text-[1.8rem]'>For more information, visit our <a target='_blank' className='underline text-[1.8rem]' href="https://www.linkedin.com/company/lifeandmedtech">LinkedIn Page</a></p>
                </div>
            </div>
        </div>
    )
}

export default CareersSectionTwo;