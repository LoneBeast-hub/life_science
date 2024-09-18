import EV from '../../assets/expertise.jpg';
import TSV from '../../assets/tailored_solutions.jpg';
import IDV from '../../assets/innovation_driven.jpg';
import CV from '../../assets/commitment.jpg';

const AboutSectionThree = () => {
    return(
        <div className="max-w-[1200px] w-[90%] mx-auto mb-[4rem]">
            {/* fixed bg */}
            <div className="w-full mb-[4rem] max-h-max flex items-center about_section_two_bg min-h-[60px] md:h-[120px] bg-fixed bg-cover bg-no-repeat">
                <p className="text-[4rem] text-white font-bold text-center w-full">Why Choose Us</p>
            </div>
            {/* reasons */}
            <div className="grid lg:grid-cols-3 gap-[25px] sm:grid-cols-2 grid-cols-1">
                {/* Expertise */}
                <div className="shadow-[0_0_30px_5px_#dbdbdb] p-[20px] rounded-xl">
                    {/* vector img */}
                    <div className='w-full rounded-xl overflow-hidden border border-[#dbdbdb]'>
                        <img className='w-full' src={EV} alt="Expertise Vector" />
                    </div>
                    {/* info */}
                    <div className='text-center mt-[10px]'>
                        {/* heading */}
                        <p className='text-[2.4rem] font-semibold'>Expertise</p>
                        {/* info */}
                        <p className='text-[1.6rem]'>
                            Our team is composed of seasoned professionals from life 
                            sciences, medical sciences, engineering, business, and IT. 
                            We bring a holistic, cross-disciplinary approach to every 
                            project.
                        </p>
                    </div>
                </div>
                {/* Tailored Solutions */}
                <div className="shadow-[0_0_30px_5px_#dbdbdb] p-[20px] rounded-xl">
                    {/* vector img */}
                    <div className='w-full rounded-xl overflow-hidden border border-[#dbdbdb]'>
                        <img className='w-full' src={TSV} alt="Taliored Solutions Vector" />
                    </div>
                    {/* info */}
                    <div className='text-center mt-[10px]'>
                        {/* heading */}
                        <p className='text-[2.4rem] font-semibold'>Taliored Solutions</p>
                        {/* info */}
                        <p className='text-[1.6rem]'>
                            We understand that every client is different. That’s why 
                            we provide customized solutions based on your unique needs, 
                            ensuring better outcomes.
                        </p>
                    </div>
                </div>
                {/* Innovation-Driven */}
                <div className="shadow-[0_0_30px_5px_#dbdbdb] p-[20px] rounded-xl">
                    {/* vector img */}
                    <div className='w-full rounded-xl overflow-hidden border border-[#dbdbdb]'>
                        <img className='w-full' src={IDV} alt="Innovation-Driven Vector" />
                    </div>
                    {/* info */}
                    <div className='text-center mt-[10px]'>
                        {/* heading */}
                        <p className='text-[2.4rem] font-semibold'>Innovation-Driven</p>
                        {/* info */}
                        <p className='text-[1.6rem]'>
                            We are passionate about leveraging the latest in scientific 
                            and technological advancements to provide you with cutting-edge 
                            solutions.
                        </p>
                    </div>
                </div>
                {/* Commitment to Excellence */}
                <div className="shadow-[0_0_30px_5px_#dbdbdb] p-[20px] rounded-xl">
                    {/* vector img */}
                    <div className='w-full rounded-xl overflow-hidden border border-[#dbdbdb]'>
                        <img className='w-full' src={CV} alt="Commitment to Excellence Vector" />
                    </div>
                    {/* info */}
                    <div className='text-center mt-[10px]'>
                        {/* heading */}
                        <p className='text-[2.4rem] font-semibold'>Commitment to Excellence</p>
                        {/* info */}
                        <p className='text-[1.6rem]'>
                            From strategy development to execution, we hold ourselves to 
                            the highest standards to ensure quality, compliance, and 
                            successful results for our clients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSectionThree;