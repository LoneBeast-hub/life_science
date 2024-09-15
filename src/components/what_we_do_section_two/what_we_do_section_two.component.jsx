// images
import LSC from '../../assets/life_science_consulting.jpg';
import MAS from '../../assets/medical_affairs_solutions.jpg';

const WhatWeDoSectionTwo = () => {
    return (
        <div className="max-w-[1200px] w-[90%] flex flex-col gap-[4rem] mx-auto py-[5rem]">
            {/* Life Science Consulting */}
            <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row gap-[3rem]">
                {/* text info */}
                <div className="flex flex-col gap-[2rem] md:w-1/2">
                    {/* heading */}
                    <p className="text-[3rem] font-medium leading-[1]">Life Science Consulting</p>
                    {/* body */}
                    <p className="text-[1.4rem]">
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
                    <p className="text-[3rem] font-medium leading-[1]">Medical Affairs Solutions</p>
                    {/* body */}
                    <p className="text-[1.4rem]">
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
        </div>
    );
};

export default WhatWeDoSectionTwo;