import EV from '../../assets/expertise.jpg';
import TSV from '../../assets/tailored_solutions.jpg';
import IDV from '../../assets/innovation_driven.jpg';
import CV from '../../assets/commitment.jpg';

const HomeSectionTwo = () => {

    return (
        <div className="w-full flex py-[40px] items-center relative min-h-[418px]">
            <div className="max-w-[1200px] w-[90%] mx-auto">
                <div>
                    {/* heading */}
                    <p className='text-[2.4rem] text-center md:text-[3.7rem] font-bold text-black mb-[30px]'>Expertise</p>
                    {/* reasons */}
                    <div className="grid lg:grid-cols-3 gap-[25px] sm:grid-cols-2 grid-cols-1">
                        {/* Engineering */}
                        <div className="shadow-[0_0_30px_5px_#dbdbdb] p-[20px] rounded-xl">
                            {/* vector img */}
                            <div className='w-full rounded-xl overflow-hidden border border-[#dbdbdb]'>
                                <img className='w-full' src={EV} alt="Engineering Vector" />
                            </div>
                            {/* info */}
                            <div className='text-center mt-[10px]'>
                                {/* heading */}
                                <p className='text-[2.4rem] font-semibold'>Engineering</p>
                                {/* info */}
                                <p className='text-[1.6rem]'>
                                    We specialize in innovative solutions through Regenerative Medicine, 
                                    Tissue Engineering, and Medical Device Development, advancing healthcare 
                                    with cutting-edge technology.
                                </p>
                            </div>
                        </div>
                        {/* AI in Medicine */}
                        <div className="shadow-[0_0_30px_5px_#dbdbdb] p-[20px] rounded-xl">
                            {/* vector img */}
                            <div className='w-full rounded-xl overflow-hidden border border-[#dbdbdb]'>
                                <img className='w-full' src={TSV} alt="AI in Medicine Vector" />
                            </div>
                            {/* info */}
                            <div className='text-center mt-[10px]'>
                                {/* heading */}
                                <p className='text-[2.4rem] font-semibold'>AI in Medicine</p>
                                {/* info */}
                                <p className='text-[1.6rem]'>
                                    AI in Medicine is transforming healthcare with innovations in medical 
                                    imaging, diagnostics, predictive analysis, and decision support. We 
                                    harness natural language processing to streamline patient data and 
                                    develop personalized treatment plans for improved patient outcomes.
                                </p>
                            </div>
                        </div>
                        {/* Clinical Research */}
                        <div className="shadow-[0_0_30px_5px_#dbdbdb] p-[20px] rounded-xl">
                            {/* vector img */}
                            <div className='w-full rounded-xl overflow-hidden border border-[#dbdbdb]'>
                                <img className='w-full' src={IDV} alt="Clinical Research Vector" />
                            </div>
                            {/* info */}
                            <div className='text-center mt-[10px]'>
                                {/* heading */}
                                <p className='text-[2.4rem] font-semibold'>Clinical Research</p>
                                {/* info */}
                                <p className='text-[1.6rem]'>
                                    Our expertise spans Regulatory Affairs, Clinical Trial Management, 
                                    Pharmacovigilance, Biostatistics, and Clinical Project Management. 
                                    We ensure compliance, safety, and success in clinical trials.
                                </p>
                            </div>
                        </div>
                        {/* Biosciences */}
                        <div className="shadow-[0_0_30px_5px_#dbdbdb] p-[20px] rounded-xl">
                            {/* vector img */}
                            <div className='w-full rounded-xl overflow-hidden border border-[#dbdbdb]'>
                                <img className='w-full' src={CV} alt="Biosciences Vector" />
                            </div>
                            {/* info */}
                            <div className='text-center mt-[10px]'>
                                {/* heading */}
                                <p className='text-[2.4rem] font-semibold'>Biosciences</p>
                                {/* info */}
                                <p className='text-[1.6rem]'>
                                    Biosciences expertise covers Molecular Biology, Microbiology, 
                                    Immunology, Cell Biology, and Genomics/Bioinformatics, offering 
                                    advanced research and solutions in these critical areas of life 
                                    sciences.
                                </p>
                            </div>
                        </div>
                        {/* Health Sciences */}
                        <div className="shadow-[0_0_30px_5px_#dbdbdb] p-[20px] rounded-xl">
                            {/* vector img */}
                            <div className='w-full rounded-xl overflow-hidden border border-[#dbdbdb]'>
                                <img className='w-full' src={CV} alt="Health Sciences" />
                            </div>
                            {/* info */}
                            <div className='text-center mt-[10px]'>
                                {/* heading */}
                                <p className='text-[2.4rem] font-semibold'>Health Sciences</p>
                                {/* info */}
                                <p className='text-[1.6rem]'>
                                    Our expertise spans various fields in health sciences, focusing 
                                    on advancing healthcare through innovative research and application. 
                                    From disease prevention and treatment to health promotion and wellness, 
                                    we work to improve public health outcomes through scientific inquiry, 
                                    clinical practice, and policy development.
                                </p>
                            </div>
                        </div>
                        {/* Business */}
                        <div className="shadow-[0_0_30px_5px_#dbdbdb] p-[20px] rounded-xl">
                            {/* vector img */}
                            <div className='w-full rounded-xl overflow-hidden border border-[#dbdbdb]'>
                                <img className='w-full' src={CV} alt="Business" />
                            </div>
                            {/* info */}
                            <div className='text-center mt-[10px]'>
                                {/* heading */}
                                <p className='text-[2.4rem] font-semibold'>Business</p>
                                {/* info */}
                                <p className='text-[1.6rem]'>
                                    We integrate business acumen with life sciences and medTech innovations 
                                    to drive growth and efficiency. Our focus is on leveraging market 
                                    insights and strategic partnerships to enhance healthcare solutions 
                                    and improve patient outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSectionTwo;
