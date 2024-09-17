// images
import LSC from '../../assets/life_science_consulting.jpg';
import MAS from '../../assets/medical_affairs_solutions.jpg';
import RSAC from '../../assets/Regulatory_strategy_and_compliance.jpg';
import MWS from '../../assets/medical_writing_services.jpg';
import BOTT from '../../assets/business_optimization_through_technology.jpg'

const WhatWeDoSectionTwo = () => {
    return (
        <div className="max-w-[1200px] w-[90%] flex flex-col gap-[4rem] mx-auto py-[5rem]">
            {/* Life Science Consulting */}
            <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row gap-[3rem]">
                {/* text info */}
                <div className="flex flex-col gap-[2rem] md:w-1/2">
                    {/* heading */}
                    <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Life Science Consulting</p>
                    {/* body */}
                    <p className="text-[1.4rem] md:text-left text-justify">
                        We provide strategic guidance that helps businesses stay
                        ahead in the fast-paced world of life sciences. Our consulting
                        solutions focus on product development, regulatory compliance,
                        market access, and innovative strategies that improve patient
                        outcomes. Whether it’s biotech, pharmaceuticals, or medical devices,
                        our solutions are built to empower your success.
                    </p>
                </div>
                {/* img */}
                <div className="md:w-1/2">
                    <img className="w-full" src={LSC} alt="Life Science Consulting" />
                </div>
            </div>
            {/* Medical Affairs Solutions */}
            <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row-reverse gap-[3rem]">
                {/* text info */}
                <div className="flex flex-col gap-[2rem] md:w-1/2">
                    {/* heading */}
                    <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Medical Affairs Solutions</p>
                    {/* body */}
                    <p className="text-[1.4rem] md:text-left text-justify">
                        Our medical affairs team supports you through every phase of
                        the product lifecycle, ensuring that your innovations align
                        with clinical standards and regulatory expectations. From
                        strategic planning and clinical trial support to managing
                        post-market activities, we help you maintain the highest
                        levels of quality and compliance while bringing your products
                        to market faster.
                    </p>
                </div>
                {/* img */}
                <div className="md:w-1/2">
                    <img className="w-full" src={MAS} alt="Medical Affairs Solutions" />
                </div>
            </div>
            {/* Regulatory Strategy and Compliance */}
            <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row gap-[3rem]">
                {/* text info */}
                <div className="flex flex-col gap-[2rem] md:w-1/2">
                    {/* heading */}
                    <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Regulatory Strategy and Compliance</p>
                    {/* body */}
                    <p className="text-[1.4rem] md:text-left text-justify">
                        Navigating regulatory requirements is a critical aspect of success 
                        in life sciences. We specialize in global regulatory strategy, 
                        helping you meet local and international requirements. Our team 
                        ensures that your product meets all necessary guidelines, from 
                        submission to post-approval monitoring, reducing time-to-market 
                        and mitigating risks.
                    </p>
                </div>
                {/* img */}
                <div className="md:w-1/2">
                    <img className="w-full" src={RSAC} alt="Regulatory Strategy and Compliance" />
                </div>
            </div>
            {/* Medical Writing Services */}
            <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row-reverse gap-[3rem]">
                {/* text info */}
                <div className="flex flex-col gap-[2rem] md:w-1/2">
                    {/* heading */}
                    <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Medical Writing Services</p>
                    {/* body */}
                    <p className="text-[1.4rem] md:text-left text-justify">
                        Accurate, clear, and compliant medical writing is at the heart of 
                        every successful healthcare and life science venture. Our expert 
                        writers craft high-quality documents for regulatory submissions, 
                        clinical trial reports, scientific publications, and marketing 
                        materials. With experience in therapeutic areas and regulatory 
                        writing standards, we ensure that your message is precise and 
                        impactful.
                    </p>
                </div>
                {/* img */}
                <div className="md:w-1/2">
                    <img className="w-full" src={MWS} alt="Medical Writing Services" />
                </div>
            </div>
            {/* Business Optimization Through Technology */}
            <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row gap-[3rem]">
                {/* text info */}
                <div className="flex flex-col gap-[2rem] md:w-1/2">
                    {/* heading */}
                    <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Business Optimization Through Technology</p>
                    {/* body */}
                    <p className="text-[1.4rem] md:text-left text-justify">
                        Combining IT expertise with business know-how, we help you implement 
                        technology solutions that streamline operations, improve data management, 
                        and enhance decision-making processes. From integrating AI-driven analytics 
                        to leveraging advanced software for clinical data management, we help you stay 
                        competitive in today’s digital-driven landscape.
                    </p>
                </div>
                {/* img */}
                <div className="md:w-1/2">
                    <img className="w-full" src={BOTT} alt="Business Optimization Through Technology" />
                </div>
            </div>
        </div>
    );
};

export default WhatWeDoSectionTwo;