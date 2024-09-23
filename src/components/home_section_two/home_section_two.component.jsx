import EE from '../../assets/expertise_engineering.jpg';
import EAM from '../../assets/expertise_ai.jpg';
import ECR from '../../assets/expertise_clinical_research.jpg';
import EB from '../../assets/biotechnology.jpg';
import ESC from '../../assets/expertise_science_communication.jpg'
import EBS from '../../assets/expertise_business.jpg'

const HomeSectionTwo = () => {

    return (
        <div className="w-full py-[40px]">
            {/* heading */}
            <p className='text-[2.4rem] text-center md:text-[3.7rem] font-bold text-black mb-[30px]'>Expertise</p>
            <div className="max-w-[1200px] w-[90%] flex flex-col gap-[4rem] mx-auto py-[5rem]">
                {/* Engineering */}
                <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row gap-[3rem]">
                    {/* text info */}
                    <div className="flex flex-col gap-[2rem] md:w-1/2">
                        {/* heading */}
                        <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Engineering</p>
                        {/* body */}
                        <p className="text-[1.4rem] md:text-left text-justify">
                            We specialize in innovative solutions through Regenerative Medicine, 
                            Tissue Engineering, and Medical Device Development, advancing healthcare 
                            with cutting-edge technology.
                        </p>
                    </div>
                    {/* img */}
                    <div className="md:w-1/2">
                        <img className="w-full" src={EE} alt="Engineering" />
                    </div>
                </div>
                {/* AI in Medicine */}
                <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row-reverse gap-[3rem]">
                    {/* text info */}
                    <div className="flex flex-col gap-[2rem] md:w-1/2">
                        {/* heading */}
                        <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">AI in Medicine</p>
                        {/* body */}
                        <p className="text-[1.4rem] md:text-left text-justify">
                        AI in Medicine is transforming healthcare with innovations in medical 
                                    imaging, diagnostics, predictive analysis, and decision support. We 
                                    harness natural language processing to streamline patient data and 
                                    develop personalized treatment plans for improved patient outcomes.
                        </p>
                    </div>
                    {/* img */}
                    <div className="md:w-1/2">
                        <img className="w-full" src={EAM} alt="AI in Medicine" />
                    </div>
                </div>
                {/* Clinical Research */}
                <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row gap-[3rem]">
                    {/* text info */}
                    <div className="flex flex-col gap-[2rem] md:w-1/2">
                        {/* heading */}
                        <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Clinical Research</p>
                        {/* body */}
                        <p className="text-[1.4rem] md:text-left text-justify">
                            Our expertise spans Regulatory Affairs, Clinical Trial Management, 
                            Pharmacovigilance, Biostatistics, and Clinical Project Management. 
                            We ensure compliance, safety, and success in clinical trials.
                        </p>
                    </div>
                    {/* img */}
                    <div className="md:w-1/2">
                        <img className="w-full" src={ECR} alt="Clinical Research" />
                    </div>
                </div>
                {/* Biosciences */}
                <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row-reverse gap-[3rem]">
                    {/* text info */}
                    <div className="flex flex-col gap-[2rem] md:w-1/2">
                        {/* heading */}
                        <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Biosciences</p>
                        {/* body */}
                        <p className="text-[1.4rem] md:text-left text-justify">
                            Biosciences expertise covers Molecular Biology, Microbiology, 
                            Immunology, Cell Biology, and Genomics/Bioinformatics, offering 
                            advanced research and solutions in these critical areas of life 
                            sciences.
                        </p>
                    </div>
                    {/* img */}
                    <div className="md:w-1/2">
                        <img className="w-full" src={EB} alt="Biosciences" />
                    </div>
                </div>
                {/* Medical and scientific communications */}
                <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row gap-[3rem]">
                    {/* text info */}
                    <div className="flex flex-col gap-[2rem] md:w-1/2">
                        {/* heading */}
                        <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Medical and scientific communications</p>
                        {/* body */}
                        <p className="text-[1.4rem] md:text-left text-justify">
                            Medical & Scientific Communications leverages expert knowledge 
                            in clinical research, regulatory guidelines, and scientific 
                            writing to deliver clear, accurate, and impactful content. We 
                            bridge the gap between complex scientific data and diverse 
                            audiences, ensuring the effective dissemination of medical 
                            information to support regulatory submissions, clinical trial 
                            outcomes, and healthcare decision-making, ultimately improving 
                            patient care and advancing medical innovations.
                        </p>
                    </div>
                    {/* img */}
                    <div className="md:w-1/2">
                        <img className="w-full" src={ESC} alt="Medical and scientific communications" />
                    </div>
                </div>
                {/* Business */}
                <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row-reverse gap-[3rem]">
                    {/* text info */}
                    <div className="flex flex-col gap-[2rem] md:w-1/2">
                        {/* heading */}
                        <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Business</p>
                        {/* body */}
                        <p className="text-[1.4rem] md:text-left text-justify">
                            We integrate business acumen with life sciences and medTech innovations 
                            to drive growth and efficiency. Our focus is on leveraging market 
                            insights and strategic partnerships to enhance healthcare solutions 
                            and improve patient outcomes.
                        </p>
                    </div>
                    {/* img */}
                    <div className="md:w-1/2">
                        <img className="w-full" src={EBS} alt="Business" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSectionTwo;
